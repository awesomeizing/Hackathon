'use strict';
// Local-only processing: normalize -> scan secrets -> aggregate -> summarize failed logins.
// Nothing here produces free text for egress; output records use only sp-policy-1 fields.
const { METRICS, pseudonym } = require('../shared/policy');

const SECRET_PATTERNS = [
  ['password', /\b(?:pass(?:word)?|pwd|secret)\s*[=:]\s*[^\s,;&"']+/gi],
  ['api_key', /\b(?:api[_-]?key|token|access[_-]?key|client[_-]?secret)\s*[=:]\s*[^\s,;&"']+/gi],
  ['bearer', /\bBearer\s+[A-Za-z0-9._~+/-]+=*/g],
  ['aws_key', /\bAKIA[0-9A-Z]{16}\b/g],
  ['private_key', /-----BEGIN [A-Z ]*PRIVATE KEY-----/g],
  ['jwt', /\beyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g],
  ['url_credentials', /\b[a-z][a-z0-9+.-]*:\/\/[^\s:/@]+:[^\s@/]+@/gi],
];

function findSecrets(text) {
  const hits = [];
  for (const [label, re] of SECRET_PATTERNS) for (const m of text.matchAll(re)) hits.push([m.index, m.index + m[0].length, label]);
  return hits.sort((a, b) => a[0] - b[0]);
}

const DEFAULT_MAPPING = {
  fields: {
    ts: 'ts', host: 'host', type: 'type', metric: 'metric', value: 'value', level: 'level',
    category: 'category', message: 'message', user: 'user', src_ip: 'src_ip', outcome: 'outcome',
  },
  metric_alias: {
    cpu: 'cpu_pct', memory: 'mem_pct', mem: 'mem_pct', disk: 'disk_pct', latency: 'latency_ms',
    packet_loss: 'packet_loss_pct', loss: 'packet_loss_pct', bandwidth: 'bw_mbps', bw: 'bw_mbps',
    up: 'service_up', service: 'service_up', availability: 'service_up',
  },
};

function toUtc(v, nowMs) {
  let ms = NaN;
  if (typeof v === 'number') ms = v < 1e12 ? v * 1000 : v;
  else if (typeof v === 'string') ms = /^\d+(\.\d+)?$/.test(v) ? toUtc(Number(v), nowMs).ms : Date.parse(v);
  return Number.isFinite(ms) ? { ms, source: 'stream' } : { ms: nowMs, source: 'arrival' };
}
const LEVELS = { warn: 'warning', warning: 'warning', err: 'error', error: 'error', fatal: 'critical', crit: 'critical', critical: 'critical', alert: 'critical', emerg: 'critical' };
const CATEGORIES = ['app', 'system', 'network', 'security'];
const SSH_FAIL = /Failed password for (?:invalid user )?(\S+) from (\S+)/i;

// One raw organizer line -> one internal event. Unparseable text is kept as a local log line.
function normalize(line, nowMs = Date.now(), mapping = DEFAULT_MAPPING) {
  let o = null;
  try { o = JSON.parse(line); } catch { /* plain-text line, e.g. syslog */ }
  if (!o || typeof o !== 'object' || Array.isArray(o)) o = { message: String(line) };
  const F = mapping.fields;
  const f = k => o[F[k]];
  const t = toUtc(f('ts'), nowMs);
  const e = { ts: new Date(t.ms).toISOString(), ts_source: t.source, host: String(f('host') ?? 'unknown') };
  const msg = f('message') == null ? '' : String(f('message'));
  const ssh = SSH_FAIL.exec(msg);
  const type = String(f('type') ?? (f('metric') != null ? 'metric' : f('user') != null || ssh ? 'auth' : 'log')).toLowerCase();

  if (type === 'metric') {
    const m = String(f('metric') ?? '').toLowerCase();
    e.metric = METRICS.includes(m) ? m : mapping.metric_alias[m];
    e.value = Number(f('value'));
    e.type = e.metric && Number.isFinite(e.value) ? 'metric' : 'unmapped';
    return e;
  }
  if (type === 'auth' || ssh) {
    e.type = 'auth';
    e.user = String(f('user') ?? ssh?.[1] ?? 'unknown');
    e.src_ip = String(f('src_ip') ?? ssh?.[2] ?? 'unknown');
    e.outcome = ssh || /fail|denied|invalid|reject|false|^0$/i.test(String(f('outcome') ?? '')) ? 'failure' : 'success';
    return e;
  }
  e.type = 'log';
  e.level = LEVELS[String(f('level') ?? '').toLowerCase()] ?? 'info';
  const c = String(f('category') ?? '').toLowerCase();
  e.category = CATEGORIES.includes(c) ? c : 'app';
  return e;
}

const r3 = x => Math.round(x * 1000) / 1000;
const authSeverity = n => (n >= 20 ? 'critical' : n >= 10 ? 'error' : n >= 5 ? 'warning' : 'info');

class Aggregator {
  constructor(salt, authWindowS = 60) {
    this.salt = salt; this.authWindowS = authWindowS;
    this.metrics = new Map(); this.logs = new Map(); this.rawIds = [];
    this.auth = new Map();      // host -> [{at, user, ip}]  (local memory only)
    this.authLast = new Map();  // host -> failed_count last emitted
  }
  src(host) { return pseudonym(this.salt, 'src', host); }

  add(e, rawId, secretHits = 0, nowMs = Date.now()) {
    this.rawIds.push(rawId);
    const t = Date.parse(e.ts);
    if (e.type === 'metric') {
      const k = `${e.host}|${e.metric}`;
      const a = this.metrics.get(k) ?? { host: e.host, metric: e.metric, sum: 0, count: 0, max: -Infinity, last: 0, lastT: -Infinity, firstT: Infinity };
      a.sum += e.value; a.count++; a.max = Math.max(a.max, e.value); a.firstT = Math.min(a.firstT, t);
      if (t >= a.lastT) { a.last = e.value; a.lastT = t; }
      this.metrics.set(k, a);
    }
    if (e.type === 'auth') {
      if (!this.auth.has(e.host)) this.auth.set(e.host, []);
      if (e.outcome === 'failure') this.auth.get(e.host).push({ at: nowMs, user: e.user, ip: e.src_ip });
    }
    if (e.type !== 'metric' || secretHits > 0) {
      const category = e.type === 'auth' ? 'security' : e.type === 'log' ? e.category : 'system';
      const severity = e.type === 'auth' ? (e.outcome === 'failure' ? 'warning' : 'info') : e.level ?? 'warning';
      const k = `${e.host}|${category}|${severity}`;
      const l = this.logs.get(k) ?? { host: e.host, category, severity, count: 0, redactions: 0, firstT: Infinity };
      l.count++; l.redactions += secretHits; l.firstT = Math.min(l.firstT, t);
      this.logs.set(k, l);
    }
  }

  flush(nowMs = Date.now()) {
    const iso = ms => new Date(ms).toISOString();
    const records = [];
    // event_time = earliest raw event in the window: conservative for latency measurement.
    for (const a of this.metrics.values()) records.push({
      kind: 'metric', event_time: iso(a.firstT), source_id: this.src(a.host), metric: a.metric,
      avg: r3(a.sum / a.count), max: r3(a.max), last: r3(a.last), count: a.count,
    });
    for (const l of this.logs.values()) records.push({
      kind: 'log_summary', event_time: iso(l.firstT), source_id: this.src(l.host), category: l.category,
      severity: l.severity, count: l.count, redactions: l.redactions,
    });
    for (const [host, list] of this.auth) {
      const live = list.filter(x => x.at >= nowMs - this.authWindowS * 1000);
      this.auth.set(host, live);
      const prev = this.authLast.get(host) ?? 0;
      if (live.length === 0 && prev === 0) continue;   // emit one zero record to clear, then stay quiet
      this.authLast.set(host, live.length);
      records.push({
        kind: 'security_summary', event_time: iso(nowMs), source_id: this.src(host), category: 'auth_failure',
        window_s: this.authWindowS, failed_count: live.length,
        distinct_accounts: new Set(live.map(x => x.user)).size, distinct_origins: new Set(live.map(x => x.ip)).size,
        severity: authSeverity(live.length),
      });
    }
    const rawIds = this.rawIds;
    this.metrics = new Map(); this.logs = new Map(); this.rawIds = [];
    return { records, rawIds };
  }
}

module.exports = { findSecrets, normalize, Aggregator, DEFAULT_MAPPING, authSeverity };
