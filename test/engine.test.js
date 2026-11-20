'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const crypto = require('node:crypto');
const P = require('../shared/policy');
const { TenantStore } = require('../saas/engine');

const th = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'saas', 'config', 'thresholds.json'), 'utf8'));
const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sp-test-'));
const T0 = Date.parse('2026-11-20T10:00:00.000Z');
const iso = ms => new Date(ms).toISOString();
const payload = (records, t = T0) => ({ schema: P.SCHEMA, payload_id: crypto.randomUUID(), collector_id: 'col-aaaaaaaaaa', seq: 1, created_at: iso(t), source_tz: 'UTC', region: 'ap-south', policy_version: P.POLICY_VERSION, stream: 'simulated', records });
const metric = (src, m, v, t) => ({ kind: 'metric', event_time: iso(t), source_id: src, metric: m, avg: v, max: v, last: v, count: 1 });

test('duplicates are idempotent and late records are placed but kept out of the baseline', () => {
  const s = new TenantStore({ id: 'dup', name: 'Dup', home_region: 'ap-south' }, 'ap-south', dir, th);
  const p = payload([metric('src-0000000001', 'cpu_pct', 30, T0 + 10000)], T0 + 10000);
  const digest = P.sha256(P.canonical(p));
  assert.equal(s.ingest(p, digest, T0 + 11000).status, 'stored');
  const again = s.ingest(p, digest, T0 + 12000);
  assert.equal(again.status, 'duplicate'); assert.equal(again.records_stored, 0);
  const altered = { ...p, records: [{ ...p.records[0], avg: 99, max: 99, last: 99 }] };
  const conflict = s.ingest(altered, P.sha256(P.canonical(altered)), T0 + 12500);
  assert.equal(conflict.status, 'conflict'); assert.equal(conflict.records_stored, 0);
  assert.equal(s.db.prepare('select count(*) n from records').get().n, 1);
  const late = s.ingest(payload([metric('src-0000000001', 'cpu_pct', 99, T0)], T0), 'e', T0 + 13000);
  assert.equal(late.late_records, 1);
  assert.equal(s.series.get('src-0000000001|cpu_pct').last, 30);   // latest value not overwritten by the late record
  assert.equal(s.overview(T0 + 13000).counters.payloads, 2);
});

test('baseline anomaly + threshold alerts on one source merge into one explained incident; remediation needs approval', () => {
  const s = new TenantStore({ id: 'acme', name: 'Acme', home_region: 'ap-south' }, 'ap-south', dir, th);
  const src = 'src-00000000aa';
  let t = T0;
  for (let i = 0; i < 20; i++, t += 2000) s.ingest(payload([metric(src, 'cpu_pct', 35 + (i % 3), t), metric(src, 'latency_ms', 25 + (i % 2), t)], t), 'x', t + 500);
  for (let i = 0; i < 3; i++, t += 2000) s.ingest(payload([metric(src, 'cpu_pct', 96, t), metric(src, 'latency_ms', 420, t)], t), 'x', t + 500);
  const o = s.overview(t);
  assert.equal(o.counters.incidents, 1);
  const inc = o.incidents[0];
  assert.deepEqual(inc.signals.sort(), ['cpu_pct', 'latency_ms']);
  assert.equal(inc.recommendation.rule, 'cpu_network');
  assert.ok(inc.recommendation.contributing.some(c => c.kind === 'anomaly' && c.z >= 3 && c.baseline_mean < 40));
  assert.ok(o.counters.repeats_suppressed > 0 || o.counters.breach_samples > o.counters.alerts);
  assert.equal(s.rollback(inc.id, 'viewer@acme').status, 409);      // nothing executed yet
  const ok = s.approve(inc.id, 'viewer@acme');
  assert.equal(ok.status, 200); assert.equal(ok.remediation.state, 'executed_simulated');
  assert.equal(s.approve(inc.id, 'viewer@acme').status, 409);       // not twice
  assert.equal(s.rollback(inc.id, 'viewer@acme').remediation.state, 'rolled_back');
  assert.ok(s.overview(t).audit.some(a => a.action === 'remediation_rolled_back_simulated'));
});

test('tenant stores are separate files: one tenant never sees another tenant\'s sources', () => {
  const a = new TenantStore({ id: 'iso-a', name: 'A', home_region: 'ap-south' }, 'ap-south', dir, th);
  const b = new TenantStore({ id: 'iso-b', name: 'B', home_region: 'ap-south' }, 'ap-south', dir, th);
  a.ingest(payload([metric('src-00000000a1', 'cpu_pct', 30, T0)]), 'x', T0 + 500);
  a.tick(T0 + 1000); b.tick(T0 + 1000);
  assert.equal(a.overview(T0 + 1000).sources.length, 1);
  assert.equal(b.overview(T0 + 1000).sources.length, 0);
  assert.notEqual(a.db, b.db);
});

test('tenant IDs cannot escape the state directory through the SQLite filename', () => {
  assert.throws(() => new TenantStore({ id: '../outside', name: 'Bad', home_region: 'ap-south' }, 'ap-south', dir, th), /safe path segment/);
});

test('stale data downgrades a state instead of showing the last good value; silence means Poor', () => {
  const s = new TenantStore({ id: 'stale', name: 'S', home_region: 'ap-south' }, 'ap-south', dir, th);
  s.bootMs = 0;
  s.ingest(payload([metric('src-00000000b1', 'cpu_pct', 30, T0)]), 'x', T0);
  s.tick(T0 + 1000); assert.equal(s.lastHealth.sources[0].state, 'Excellent');
  s.tick(T0 + 25000); assert.equal(s.lastHealth.sources[0].state, 'Good'); assert.match(s.lastHealth.sources[0].reasons[0], /stale/);
  s.tick(T0 + 61000); assert.equal(s.lastHealth.sources[0].state, 'Poor');
});
