'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const P = require('../shared/policy');

const src = 'src-0123456789';
const valid = () => ({
  schema: P.SCHEMA, payload_id: '3b241101-e2bb-4255-8caf-4136c566a962', collector_id: 'col-0123456789', seq: 1,
  created_at: '2026-11-20T10:00:00.000Z', source_tz: 'Asia/Kolkata', region: 'ap-south', policy_version: P.POLICY_VERSION, stream: 'simulated',
  records: [{ kind: 'metric', event_time: '2026-11-20T10:00:00.000Z', source_id: src, metric: 'cpu_pct', avg: 40, max: 41, last: 40, count: 2 }],
});

test('a well-formed payload passes the allow-list', () => assert.deepEqual(P.validatePayload(valid()), []));

test('unknown fields are rejected and their names are not echoed', () => {
  const p = valid();
  p.records[0]['password=hunter2'] = 1;
  const errs = P.validatePayload(p);
  assert.equal(errs.length, 1);
  assert.ok(!errs.join().includes('hunter2'));
});

test('free text cannot ride in an enum or ID field', () => {
  for (const [k, v] of [['metric', 'cpu_pct password=x'], ['source_id', 'db-prod-01'], ['kind', 'raw_log']]) {
    const p = valid(); p.records[0][k] = v;
    assert.ok(P.validatePayload(p).length > 0, k);
  }
  const p = valid(); p.source_tz = 'Asia/Kolkata token=abc';
  assert.ok(P.validatePayload(p).length > 0);
});

test('canonical form is key-order independent and the passport hashes those bytes', () => {
  const a = valid();
  const rev = o => (Array.isArray(o) ? o.map(rev) : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).reverse().map(([k, v]) => [k, rev(v)])) : o);
  const b = rev(a);
  assert.equal(P.canonical(a), P.canonical(b));
  const body = P.canonical(a);
  const pass = P.buildPassport(a, body);
  assert.equal(pass.sha256, P.sha256(Buffer.from(body)));
  assert.ok(pass.allowed_fields.includes('records[].avg'));
});

test('heartbeat allow-list', () => {
  const hb = { schema: P.HB_SCHEMA, collector_id: 'col-0123456789', sent_at: '2026-11-20T10:00:00.000Z', version: '1.0.0', cpu_pct: 1, rss_mb: 40, buffered: 0, config_hash: 'abcdef012345', policy_version: P.POLICY_VERSION, stream: 'organizer' };
  assert.deepEqual(P.validateHeartbeat(hb), []);
  assert.ok(P.validateHeartbeat({ ...hb, hostname: 'db-01' }).length > 0);
});
