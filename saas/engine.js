'use strict';
// Tier 2 · one TenantStore per tenant = one SQLite file. A handler only ever holds the store of the
// tenant its credential maps to, so there is no query that can mix tenants.
const fs = require('node:fs');
const path = require('node:path');
const { DatabaseSync } = require('node:sqlite');

const STATES = ['Excellent', 'Good', 'Fair', 'Poor'];
const rank = s => (s ? STATES.indexOf(s) : -1);
const worse = (a, b) => (rank(a) >= rank(b) ? a : b);
const r2 = x => Math.round(x * 100) / 100;
const iso = ms => new Date(ms).toISOString();

function levelState(spec, v) {
  if (!spec) return ['Excellent', null];
  if (spec.poor_below != null) return v < spec.poor_below ? ['Poor', `< ${spec.poor_below} (down)`] : ['Excellent', null];
  if (spec.poor != null && v >= spec.poor) return ['Poor', `≥ poor ${spec.poor}`];
  if (spec.fair != null && v >= spec.fair) return ['Fair', `≥ fair ${spec.fair}`];
  if (spec.good != null && v >= spec.good) return ['Good', `≥ good ${spec.good}`];
  return ['Excellent', null];
}

// Remediation allow-list: every action is reversible, simulated, and needs a human approver.
const ACTIONS = {
  restart_service: { label: 'Restart the affected service', rollback: 'Restore the previous instance from the pre-restart snapshot' },
  scale_out: { label: 'Add one instance behind the load balancer', rollback: 'Scale back in by one instance' },
  failover_link: { label: 'Fail over to the secondary network link', rollback: 'Fail back to the primary link' },
  rotate_logs: { label: 'Rotate and compress logs on the source', rollback: 'Restore rotated logs from archive' },
  block_origins_locally: { label: 'Temporarily block offending origins at the site (origin list stays on the collector)', rollback: 'Remove the temporary block' },
  restart_collector: { label: 'Restart the collector service', rollback: 'None needed: restart is idempotent and buffered data replays' },
};
const RULES = [
  { id: 'collector_offline', when: s => s.has('collector_heartbeat'), action: 'restart_collector',
    cause: 'The collector stopped sending heartbeats, so site visibility is lost (the site itself may be fine).',
    why: 'Heartbeats are the only liveness signal. Data buffered at the site replays after reconnect, so restarting the collector is safe.' },
  { id: 'bruteforce', when: s => s.has('auth_failure'), action: 'block_origins_locally',
    cause: 'Repeated failed logins from many origins against several accounts: likely password guessing.',
    why: 'The burst is concentrated on one source. A temporary local block stops the guessing while raw auth records stay on site for investigation.' },
  { id: 'overload_down', when: s => s.has('service_up') && s.has('cpu_pct'), action: 'restart_service',
    cause: 'The service became unavailable while CPU was saturated on the same source: overload or crash loop.',
    why: 'Availability loss together with CPU saturation on one source points at the service process, not the network.' },
  { id: 'service_down', when: s => s.has('service_up'), action: 'restart_service',
    cause: 'The service availability check is failing.',
    why: 'Availability dropped with no resource pressure recorded; a restart is the lowest-risk reversible step.' },
  { id: 'cpu_network', when: s => s.has('cpu_pct') && (s.has('latency_ms') || s.has('packet_loss_pct')), action: 'scale_out',
    cause: 'CPU saturation on this source is the most likely driver of the rising latency/loss.',
    why: 'CPU and network signals moved together on the same source; adding capacity relieves both and is reversible.' },
  { id: 'network_path', when: s => s.has('latency_ms') && s.has('packet_loss_pct'), action: 'failover_link',
    cause: 'Network path degradation: latency and packet loss rose together without CPU pressure.',
    why: 'Loss plus latency without CPU pressure points at the link, not the host; failover is reversible.' },
  { id: 'latency_only', when: s => s.has('latency_ms'), action: null,
    cause: 'Latency rose without packet loss or CPU pressure: upstream dependency or congestion.',
    why: 'One signal only, so no action is proposed; investigate the upstream dependency first.' },
  { id: 'memory', when: s => s.has('mem_pct'), action: 'restart_service',
    cause: 'Memory deviates from baseline: possible leak.', why: 'Memory growth without CPU change suggests a leak; a restart frees it and is reversible.' },
  { id: 'disk', when: s => s.has('disk_pct'), action: 'rotate_logs',
    cause: 'Disk usage is high.', why: 'Log growth is the usual cause; rotation is reversible.' },
  { id: 'cpu_only', when: s => s.has('cpu_pct'), action: null,
    cause: 'CPU deviates from its baseline with no service impact yet.',
    why: 'No latency or availability impact yet, so investigate (top processes, recent jobs or deploys) before acting.' },
  { id: 'fallback', when: () => true, action: null, cause: 'Unusual signal pattern.', why: 'No rule matches with enough evidence; investigate.' },
];

const SCHEMA = `
  pragma journal_mode = WAL;
  create table if not exists collectors(collector_id text primary key, key_hash text not null unique, first_seen text, last_seen text,
    last_seen_ms integer, version text, cpu_pct real, rss_mb real, buffered integer, config_hash text, policy_version text, stream text);
  create table if not exists payloads(payload_id text primary key, collector_id text, seq integer, created_at text, received_at text,
    received_ms integer, digest text, stream text, policy_version text, source_tz text, record_count integer, min_event_ms integer, late integer);
  create table if not exists records(record_id text primary key, payload_id text, kind text, source_id text, name text,
    event_time text, event_ms integer, value real, data text, late integer default 0);
  create index if not exists records_series on records(source_id, name, event_ms);
  create table if not exists alerts(id integer primary key, created_at text, created_ms integer, incident_id integer, source_id text,
    signal text, kind text, severity text, event_time text, latency_ms integer, stream text, detail text, repeats integer default 0);
  create table if not exists incidents(id integer primary key, opened_at text, updated_ms integer, status text, resolved_at text,
    sources text, signals text, alert_count integer, recommendation text, remediation text);
  create table if not exists transitions(id integer primary key, at text, entity text, from_state text, to_state text, reasons text);
  create table if not exists audit(id integer primary key, at text, actor text, action text, detail text);
  create table if not exists timings(id integer primary key, at_ms integer, kind text, ref text, stream text, value_ms integer, unique(kind, ref));`;

class TenantStore {
  constructor(tenant, region, dir, th) {
    fs.mkdirSync(dir, { recursive: true });
    this.tenant = tenant; this.region = region; this.th = th;
    this.db = new DatabaseSync(path.join(dir, `${tenant.id}.db`));
    this.db.exec(SCHEMA);
    this.series = new Map();   // "src|metric" -> baseline + current level
    this.sec = new Map();      // src -> latest security summary state
    this.src = new Map();      // src -> { collector_id, lastRecvMs }
    this.prev = new Map(this.db.prepare('select entity, to_state from transitions where id in (select max(id) from transitions group by entity)').all().map(r => [r.entity, r.to_state]));
    this.offline = new Set();
    this.breachSamples = 0;
    this.bootMs = Date.now();
    this.lastHealth = { sources: [], collectors: [] };
    this.rebuild();
  }

  audit(actor, action, detail) {
    this.db.prepare('insert into audit(at, actor, action, detail) values (?,?,?,?)').run(iso(Date.now()), actor, action, JSON.stringify(detail));
  }

  // First collector_id seen with a key is bound to it; a key cannot speak for another collector.
  bindCollector(collectorId, keyHash) {
    const byKey = this.db.prepare('select collector_id from collectors where key_hash = ?').get(keyHash);
    if (byKey) return byKey.collector_id === collectorId;
    if (this.db.prepare('select 1 from collectors where collector_id = ?').get(collectorId)) return false;
    this.db.prepare('insert into collectors(collector_id, key_hash, first_seen) values (?,?,?)').run(collectorId, keyHash, iso(Date.now()));
    return true;
  }

  heartbeat(hb, nowMs) {
    this.db.prepare(`update collectors set last_seen = ?, last_seen_ms = ?, version = ?, cpu_pct = ?, rss_mb = ?, buffered = ?,
      config_hash = ?, policy_version = ?, stream = ? where collector_id = ?`)
      .run(iso(nowMs), nowMs, hb.version, hb.cpu_pct, hb.rss_mb, hb.buffered, hb.config_hash, hb.policy_version, hb.stream, hb.collector_id);
  }

  // Idempotent by payload_id; records placed by event time; late records stored but kept out of baselines.
  ingest(p, digest, nowMs) {
    const base = { payload_id: p.payload_id, received_digest: digest, received_at: iso(nowMs), region: this.region };
    const dup = this.db.prepare('select digest from payloads where payload_id = ?').get(p.payload_id);
    if (dup) {
      this.audit(`collector:${p.collector_id}`, 'ingest_duplicate', { payload_id: p.payload_id, same_digest: dup.digest === digest });
      return { ...base, status: 'duplicate', stored_digest: dup.digest, records_stored: 0 };
    }
    const recs = p.records.map((r, i) => ({ r, i, ms: Date.parse(r.event_time) })).sort((a, b) => a.ms - b.ms);
    const ins = this.db.prepare('insert into records(record_id, payload_id, kind, source_id, name, event_time, event_ms, value, data, late) values (?,?,?,?,?,?,?,?,?,?)');
    let late = 0;
    this.db.exec('begin');
    try {
      for (const { r, i, ms } of recs) {
        const isLate = this.isLate(r, ms);
        if (isLate) late++;
        const name = r.kind === 'metric' ? r.metric : r.category;
        const value = r.kind === 'metric' ? r.avg : r.kind === 'security_summary' ? r.failed_count : r.count;
        ins.run(`${p.payload_id}#${i}`, p.payload_id, r.kind, r.source_id, name, r.event_time, ms, value, JSON.stringify(r), isLate ? 1 : 0);
        if (!isLate) this.processRecord(r, ms, nowMs, p, false);
      }
      const minMs = recs[0].ms;
      this.db.prepare(`insert into payloads(payload_id, collector_id, seq, created_at, received_at, received_ms, digest, stream, policy_version,
        source_tz, record_count, min_event_ms, late) values (?,?,?,?,?,?,?,?,?,?,?,?,?)`)
        .run(p.payload_id, p.collector_id, p.seq, p.created_at, iso(nowMs), nowMs, digest, p.stream, p.policy_version, p.source_tz, recs.length, minMs, late);
      // Payloads replayed after an outage are timed separately so they don't hide (or fake) normal latency.
      const backlog = nowMs - Date.parse(p.created_at) > 5000;
      this.timing(backlog ? 'ingest_backlog' : 'ingest', p.payload_id, p.stream, nowMs - minMs, nowMs);
      this.db.exec('commit');
    } catch (e) { this.db.exec('rollback'); throw e; }
    return { ...base, status: 'stored', records_stored: recs.length, late_records: late };
  }

  isLate(r, ms) {
    if (r.kind === 'metric') return (this.series.get(`${r.source_id}|${r.metric}`)?.lastT ?? -Infinity) > ms;
    if (r.kind === 'security_summary') return (this.sec.get(r.source_id)?.lastT ?? -Infinity) > ms;
    return false;
  }

  processRecord(r, ms, nowMs, p, silent) {
    const info = this.src.get(r.source_id) ?? {};
    this.src.set(r.source_id, { collector_id: p.collector_id, lastRecvMs: Math.max(info.lastRecvMs ?? 0, nowMs) });
    if (r.kind === 'metric') this.processMetric(r, ms, nowMs, p, silent);
    else if (r.kind === 'security_summary') this.processSecurity(r, ms, nowMs, p, silent);
  }

  processMetric(r, ms, nowMs, p, silent) {
    const k = `${r.source_id}|${r.metric}`;
    const spec = this.th.metrics[r.metric] || {};
    const A = this.th.anomaly;
    const s = this.series.get(k) ?? { source_id: r.source_id, metric: r.metric, n: 0, mean: 0, var: 0, lastT: -Infinity, anomalous: false, alerted: null };
    const v = r.avg;
    const sd = Math.max(Math.sqrt(s.var), spec.min_sd ?? 0.5);
    const warm = s.n >= A.warmup_points;
    const z = warm ? (v - s.mean) / sd : 0;
    const anomaly = warm && Math.abs(z) >= A.z && Math.abs(v - s.mean) >= (spec.min_delta ?? 0);
    const [level, why] = levelState(spec, v);
    if (rank(level) >= 2 || anomaly) this.breachSamples++;
    const ctx = { observed: v, baseline_mean: r2(s.mean), baseline_sd: r2(sd), z: r2(z), warm };
    if (anomaly && !s.anomalous && !silent) {
      this.raise({ source_id: r.source_id, signal: r.metric, kind: 'anomaly', severity: Math.abs(z) >= 6 ? 'critical' : 'warning', event_ms: ms, stream: p.stream,
        detail: { ...ctx, rule: `|z| ≥ ${A.z} and |Δ| ≥ ${spec.min_delta}` } }, nowMs);
    }
    if (anomaly) s.anomalous = true; else if (Math.abs(z) < A.z_clear) s.anomalous = false;
    if (rank(level) >= 2 && rank(level) > rank(s.alerted) && !silent) {
      this.raise({ source_id: r.source_id, signal: r.metric, kind: 'threshold', severity: level === 'Poor' ? 'critical' : 'warning', event_ms: ms, stream: p.stream,
        detail: { ...ctx, threshold: why } }, nowMs);
    }
    s.alerted = rank(level) >= 2 ? worse(level, s.alerted) : null;
    // Baseline is frozen while anomalous, so a spike does not become the new normal.
    if (!s.anomalous) {
      if (s.n === 0) s.mean = v;
      else { const d = v - s.mean, inc = A.alpha * d; s.mean += inc; s.var = (1 - A.alpha) * (s.var + d * inc); }
      s.n++;
    }
    Object.assign(s, { lastT: ms, last: v, z: r2(z), sd: r2(sd), level, why });
    this.series.set(k, s);
  }

  processSecurity(r, ms, nowMs, p, silent) {
    const s = this.sec.get(r.source_id) ?? { alerted: null };
    const [level, why] = levelState(this.th.auth_failures, r.failed_count);
    if (rank(level) >= 2) this.breachSamples++;
    if (rank(level) >= 2 && rank(level) > rank(s.alerted) && !silent) {
      this.raise({ source_id: r.source_id, signal: 'auth_failure', kind: 'security', severity: level === 'Poor' ? 'critical' : 'warning', event_ms: ms, stream: p.stream,
        detail: { failed_count: r.failed_count, distinct_accounts: r.distinct_accounts, distinct_origins: r.distinct_origins, window_s: r.window_s,
          threshold: why, note: 'Counts only: usernames and IPs stayed on the collector' } }, nowMs);
    }
    s.alerted = rank(level) >= 2 ? worse(level, s.alerted) : null;
    Object.assign(s, { lastT: ms, failed: r.failed_count, accounts: r.distinct_accounts, origins: r.distinct_origins, window_s: r.window_s, level, why });
    this.sec.set(r.source_id, s);
  }

  // Correlation: an alert joins the open incident of the same source updated within the window;
  // a repeat of the same signal+kind only bumps `repeats` (noise reduction).
  raise(a, nowMs) {
    const W = this.th.incident_window_s * 1000;
    let inc = this.db.prepare("select * from incidents where status = 'open' and updated_ms >= ? and sources like ? order by id desc limit 1").get(nowMs - W, `%"${a.source_id}"%`);
    if (!inc) {
      const id = Number(this.db.prepare("insert into incidents(opened_at, updated_ms, status, sources, signals, alert_count) values (?,?,'open',?,'[]',0)")
        .run(iso(nowMs), nowMs, JSON.stringify([a.source_id])).lastInsertRowid);
      inc = { id, sources: JSON.stringify([a.source_id]), signals: '[]' };
    }
    const same = this.db.prepare('select id from alerts where incident_id = ? and source_id = ? and signal = ? and kind = ?').get(inc.id, a.source_id, a.signal, a.kind);
    if (same) this.db.prepare('update alerts set repeats = repeats + 1, severity = ?, detail = ? where id = ?').run(a.severity, JSON.stringify(a.detail), same.id);
    else {
      this.db.prepare('insert into alerts(created_at, created_ms, incident_id, source_id, signal, kind, severity, event_time, latency_ms, stream, detail) values (?,?,?,?,?,?,?,?,?,?,?)')
        .run(iso(nowMs), nowMs, inc.id, a.source_id, a.signal, a.kind, a.severity, iso(a.event_ms), nowMs - a.event_ms, a.stream, JSON.stringify(a.detail));
    }
    const sources = [...new Set([...JSON.parse(inc.sources), a.source_id])];
    const signals = [...new Set([...JSON.parse(inc.signals), a.signal])];
    this.db.prepare('update incidents set updated_ms = ?, sources = ?, signals = ?, alert_count = (select count(*) from alerts where incident_id = ?), recommendation = ? where id = ?')
      .run(nowMs, JSON.stringify(sources), JSON.stringify(signals), inc.id, JSON.stringify(this.recommend(inc.id, signals)), inc.id);
    this.timing(a.kind === 'offline' ? 'offline' : 'alert', `${inc.id}:${a.source_id}:${a.signal}:${a.kind}:${nowMs}`, a.stream, nowMs - a.event_ms, nowMs);
  }

  recommend(incidentId, signals) {
    const alerts = this.db.prepare('select * from alerts where incident_id = ? order by created_ms').all(incidentId);
    const S = new Set(signals);
    const rule = RULES.find(r => r.when(S));
    const contributing = alerts.map(a => ({ signal: a.signal, kind: a.kind, source_id: a.source_id, severity: a.severity, at: a.created_at, event_time: a.event_time, repeats: a.repeats, ...JSON.parse(a.detail) }));
    const maxZ = Math.max(0, ...contributing.map(c => Math.abs(c.z || 0)));
    const confidence = Math.min(0.95, 0.5 + 0.1 * (S.size - 1) + 0.05 * Math.min(4, Math.max(0, maxZ - 3)) + (alerts.some(a => a.severity === 'critical') ? 0.1 : 0));
    const describe = c => {
      if (c.kind === 'anomaly') return `${c.observed} vs baseline ${c.baseline_mean} ± ${c.baseline_sd} (z = ${c.z}) → anomaly`;
      if (c.kind === 'threshold') return `${c.observed} ${c.threshold}${c.warm ? ` (baseline ${c.baseline_mean}, z = ${c.z})` : ''} → threshold breach`;
      if (c.kind === 'security') return `${c.failed_count} failed logins in ${c.window_s}s from ${c.distinct_origins} origins on ${c.distinct_accounts} accounts (${c.threshold})`;
      if (c.kind === 'offline') return `no heartbeat for ${c.age_s}s (limit ${c.limit_s}s)`;
      return '';
    };
    const reasoning = contributing.map((c, i) => `${i + 1}. ${c.signal} on ${c.source_id}: ${describe(c)}`);
    const srcCount = new Set(contributing.map(c => c.source_id)).size;
    reasoning.push(`${reasoning.length + 1}. ${alerts.length} alert(s) on ${srcCount} source(s) within ${this.th.incident_window_s}s → one incident.`);
    reasoning.push(`${reasoning.length + 1}. Rule "${rule.id}" matched {${[...S].join(', ')}} → ${rule.action ?? 'investigate'}. ${rule.why}`);
    return {
      rule: rule.id, cause: rule.cause, why: rule.why, confidence: r2(confidence), contributing, reasoning,
      action: rule.action ? { id: rule.action, ...ACTIONS[rule.action], reversible: true, mode: 'simulation' } : { id: 'investigate', label: 'Investigate (no automatic action proposed)', reversible: null },
    };
  }

  approve(id, actor, nowMs = Date.now()) {
    const inc = this.db.prepare('select * from incidents where id = ?').get(id);
    if (!inc) return { status: 404, error: 'no such incident' };
    const action = JSON.parse(inc.recommendation || 'null')?.action;
    const rem = JSON.parse(inc.remediation || 'null');
    const checks = [
      { check: 'action is on the remediation allow-list', ok: !!action && Object.hasOwn(ACTIONS, action.id) },
      { check: 'action is reversible and has a rollback plan', ok: !!action?.rollback },
      { check: 'incident is open', ok: inc.status === 'open' },
      { check: 'not already executed', ok: !rem || rem.state === 'rolled_back' },
      { check: 'human approver identified', ok: !!actor },
      { check: 'execution mode is simulation (no real system is touched)', ok: true },
    ];
    const ok = checks.every(c => c.ok);
    this.audit(actor, ok ? 'remediation_approved' : 'remediation_denied', { incident: id, action: action?.id, checks });
    if (!ok) return { status: 409, ok, checks };
    const r = { state: 'executed_simulated', action: action.id, label: action.label, approved_by: actor, approved_at: iso(nowMs), rollback: action.rollback, checks };
    this.audit('system', 'remediation_executed_simulated', { incident: id, action: action.id, note: 'Simulation only: no real system was changed' });
    this.db.prepare('update incidents set remediation = ? where id = ?').run(JSON.stringify(r), id);
    return { status: 200, ok, remediation: r };
  }

  rollback(id, actor, nowMs = Date.now()) {
    const inc = this.db.prepare('select * from incidents where id = ?').get(id);
    const rem = JSON.parse(inc?.remediation || 'null');
    if (!rem || rem.state !== 'executed_simulated') return { status: 409, ok: false, error: 'nothing to roll back' };
    Object.assign(rem, { state: 'rolled_back', rolled_back_by: actor, rolled_back_at: iso(nowMs) });
    this.audit(actor, 'remediation_rolled_back_simulated', { incident: id, action: rem.action, rollback: rem.rollback });
    this.db.prepare('update incidents set remediation = ? where id = ?').run(JSON.stringify(rem), id);
    return { status: 200, ok: true, remediation: rem };
  }

  timing(kind, ref, stream, valueMs, nowMs) {
    this.db.prepare('insert or ignore into timings(at_ms, kind, ref, stream, value_ms) values (?,?,?,?,?)').run(nowMs, kind, ref, stream, Math.round(valueMs));
  }

  addRenderTimings(samples, nowMs = Date.now()) {
    const get = this.db.prepare('select min_event_ms, stream, received_ms, created_at from payloads where payload_id = ?');
    for (const s of (Array.isArray(samples) ? samples : []).slice(0, 200)) {
      const p = typeof s?.payload_id === 'string' && get.get(s.payload_id);
      if (!p || !Number.isFinite(s.rendered_ms) || Math.abs(s.rendered_ms - nowMs) > 60000) continue;
      const backlog = p.received_ms - Date.parse(p.created_at) > 5000;
      this.timing(backlog ? 'render_backlog' : 'render', s.payload_id, p.stream, s.rendered_ms - p.min_event_ms, nowMs);
    }
  }

  transition(entity, state, reasons, nowMs) {
    const prev = this.prev.get(entity);
    if (prev === state) return;
    this.db.prepare('insert into transitions(at, entity, from_state, to_state, reasons) values (?,?,?,?,?)').run(iso(nowMs), entity, prev ?? 'none', state, JSON.stringify(reasons));
    this.prev.set(entity, state);
  }

  // Runs every second: health states, stale/offline detection, transitions, incident resolution.
  tick(nowMs = Date.now()) {
    const th = this.th;
    const collectors = [];
    for (const c of this.db.prepare('select * from collectors where last_seen_ms is not null').all()) {
      // While this SaaS was itself down it could not hear anyone, so silence before boot does not count.
      const age = (nowMs - Math.max(c.last_seen_ms, this.bootMs)) / 1000;
      let state = 'Excellent';
      const reasons = [];
      if (age > th.collector_offline_after_s) { state = 'Poor'; reasons.push(`offline: last heartbeat ${Math.round((nowMs - c.last_seen_ms) / 1000)}s ago (limit ${th.collector_offline_after_s}s)`); }
      else if (age > th.collector_late_after_s) { state = 'Fair'; reasons.push(`heartbeat late: ${Math.round(age)}s`); }
      else if (c.buffered > 0) { state = 'Good'; reasons.push(`replaying backlog: ${c.buffered} payload(s)`); }
      if (state === 'Poor' && !this.offline.has(c.collector_id)) {
        this.offline.add(c.collector_id);
        this.raise({ source_id: c.collector_id, signal: 'collector_heartbeat', kind: 'offline', severity: 'critical', event_ms: c.last_seen_ms, stream: c.stream,
          detail: { last_seen: c.last_seen, age_s: Math.round((nowMs - c.last_seen_ms) / 1000), limit_s: th.collector_offline_after_s } }, nowMs);
      }
      if (state !== 'Poor') this.offline.delete(c.collector_id);
      if (!reasons.length) reasons.push('heartbeats on time');
      this.transition(`collector:${c.collector_id}`, state, reasons, nowMs);
      const { key_hash, ...pub } = c;   // never expose the credential hash to viewers
      collectors.push({ ...pub, state, reasons, age_s: Math.round((nowMs - c.last_seen_ms) / 1000) });
    }

    const bySrc = new Map();
    const entry = id => { if (!bySrc.has(id)) bySrc.set(id, { metrics: {}, security: null }); return bySrc.get(id); };
    for (const s of this.series.values()) entry(s.source_id).metrics[s.metric] = s;
    for (const [id, s] of this.sec) entry(id).security = s;
    const sources = [];
    for (const [id, e] of bySrc) {
      let state = 'Excellent';
      const reasons = [];
      for (const m of Object.values(e.metrics)) {
        if (rank(m.level) > 0) reasons.push(`${m.metric} ${m.last} ${m.why}`);
        state = worse(state, m.level);
        if (m.anomalous) { state = worse(state, 'Good'); reasons.push(`${m.metric} deviates from baseline (z = ${m.z})`); }
      }
      if (e.security && rank(e.security.level) > 0) {
        state = worse(state, e.security.level);
        reasons.push(`${e.security.failed} failed logins in ${e.security.window_s}s ${e.security.why}`);
      }
      const info = this.src.get(id);
      const age = (nowMs - Math.max(info?.lastRecvMs ?? 0, this.bootMs)) / 1000;
      if (age > th.no_data_after_s) { reasons.unshift(`no data for ${Math.round(age)}s (limit ${th.no_data_after_s}s)`); state = 'Poor'; }
      else if (age > th.stale_after_s) {
        const down = STATES[Math.min(3, rank(state) + 1)];
        reasons.unshift(down === state ? `stale: last data ${Math.round(age)}s ago` : `stale: last data ${Math.round(age)}s ago → downgraded ${state} → ${down}`);
        state = down;
      }
      if (!reasons.length) reasons.push('all signals within thresholds and baselines');
      this.transition(`source:${id}`, state, reasons, nowMs);
      const metrics = Object.fromEntries(Object.values(e.metrics).map(m => [m.metric, {
        value: m.last, level: m.level, baseline_mean: r2(m.mean), baseline_sd: m.sd, z: m.z, anomalous: m.anomalous, event_time: iso(m.lastT), warm: m.n >= th.anomaly.warmup_points,
      }]));
      sources.push({ source_id: id, collector_id: info?.collector_id, state, reasons, metrics,
        security: e.security && { failed_count: e.security.failed, distinct_accounts: e.security.accounts, distinct_origins: e.security.origins, level: e.security.level },
        age_s: Math.round((nowMs - (info?.lastRecvMs ?? nowMs)) / 1000) });
    }
    this.db.prepare("update incidents set status = 'resolved', resolved_at = ? where status = 'open' and updated_ms < ?").run(iso(nowMs), nowMs - th.incident_resolve_after_s * 1000);
    this.lastHealth = { sources: sources.sort((a, b) => a.source_id.localeCompare(b.source_id)), collectors };
  }

  timingStats() {
    const out = {};
    for (const kind of ['render', 'ingest', 'alert', 'offline', 'render_backlog', 'ingest_backlog']) {
      const rows = this.db.prepare('select value_ms, stream from timings where kind = ? order by id desc limit 500').all(kind);
      const v = rows.map(r => r.value_ms).sort((a, b) => a - b);
      const pct = p => (v.length ? v[Math.min(v.length - 1, Math.ceil(p * v.length) - 1)] : null);
      out[kind] = { n: v.length, p50: pct(0.5), p95: pct(0.95), max: v.length ? v[v.length - 1] : null, streams: [...new Set(rows.map(r => r.stream))] };
    }
    return out;
  }

  overview(nowMs = Date.now()) {
    const one = sql => this.db.prepare(sql).get();
    const parse = (row, ...keys) => { for (const k of keys) row[k] = row[k] ? JSON.parse(row[k]) : null; return row; };
    return {
      tenant: { id: this.tenant.id, name: this.tenant.name, home_region: this.tenant.home_region }, region: this.region, now: iso(nowMs),
      ...this.lastHealth,
      incidents: this.db.prepare('select * from incidents order by id desc limit 15').all().map(r => parse(r, 'sources', 'signals', 'recommendation', 'remediation')),
      alerts: this.db.prepare('select * from alerts order by id desc limit 25').all().map(r => parse(r, 'detail')),
      transitions: this.db.prepare('select * from transitions order by id desc limit 40').all().map(r => parse(r, 'reasons')),
      payloads: this.db.prepare('select payload_id, collector_id, seq, created_at, received_at, digest, record_count, stream, policy_version, source_tz, min_event_ms, late from payloads order by received_ms desc limit 25').all(),
      audit: this.db.prepare('select * from audit order by id desc limit 25').all().map(r => parse(r, 'detail')),
      counters: {
        payloads: one('select count(*) n from payloads').n,
        duplicates_rejected: one("select count(*) n from audit where action = 'ingest_duplicate'").n,
        records: one('select count(*) n from records').n,
        late_records: one('select count(*) n from records where late = 1').n,
        breach_samples: this.breachSamples,
        alerts: one('select count(*) n from alerts').n,
        repeats_suppressed: one('select coalesce(sum(repeats), 0) n from alerts').n,
        incidents: one('select count(*) n from incidents').n,
        secrets_kept_local: one("select coalesce(sum(json_extract(data, '$.redactions')), 0) n from records where kind = 'log_summary'").n,
      },
      timing: this.timingStats(),
      thresholds: this.th,
    };
  }

  series(sourceId, metric, nowMs = Date.now()) {
    const points = this.db.prepare("select event_time, value, late from records where kind = 'metric' and source_id = ? and name = ? and event_ms >= ? order by event_ms")
      .all(sourceId, metric, nowMs - 10 * 60000);
    const s = this.series.get(`${sourceId}|${metric}`);
    return { source_id: sourceId, metric, points, baseline: s ? { mean: r2(s.mean), sd: s.sd } : null, thresholds: this.th.metrics[metric] ?? null };
  }

  // Restart recovery: replay the last 30 min through the baselines without raising alerts again.
  rebuild() {
    const rows = this.db.prepare(`select r.data, r.event_ms, p.received_ms, p.collector_id, p.stream from records r join payloads p using (payload_id)
      where r.late = 0 and r.event_ms >= ? order by r.event_ms`).all(Date.now() - 30 * 60000);
    for (const row of rows) this.processRecord(JSON.parse(row.data), row.event_ms, row.received_ms, { collector_id: row.collector_id, stream: row.stream }, true);
  }
}

module.exports = { TenantStore, levelState, RULES, ACTIONS, STATES };
