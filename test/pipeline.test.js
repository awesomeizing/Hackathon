'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const P = require('../shared/policy');
const { findSecrets, normalize, Aggregator } = require('../collector/pipeline');

const SECRET_LINE = '{"ts":"2026-11-20T10:00:00Z","host":"db-01","type":"log","level":"error","message":"connect postgres://app:S3cr3t@10.0.0.5/db password=S3cr3t key=AKIAIOSFODNN7EXAMPLE"}';

test('secret scanner finds credentials, passwords and AWS keys', () => {
  const labels = findSecrets(SECRET_LINE).map(h => h[2]);
  for (const l of ['url_credentials', 'password', 'aws_key']) assert.ok(labels.includes(l), l);
  assert.deepEqual(findSecrets('GET /api/orders 200 41ms'), []);
});

test('normalize maps organizer aliases, epoch seconds and sshd lines', () => {
  const m = normalize('{"ts":1763632800,"host":"web-01","metric":"cpu","value":"42.5"}', 0);
  assert.equal(m.type, 'metric'); assert.equal(m.metric, 'cpu_pct'); assert.equal(m.value, 42.5); assert.equal(m.ts_source, 'stream');
  const a = normalize('Nov 20 10:00:00 web-01 sshd[1]: Failed password for invalid user admin from 203.0.113.9 port 22 ssh2', 1000);
  assert.equal(a.type, 'auth'); assert.equal(a.outcome, 'failure'); assert.equal(a.user, 'admin'); assert.equal(a.ts_source, 'arrival');
});

test('aggregated output carries no raw text, usernames, IPs, hostnames or secrets', () => {
  const agg = new Aggregator('local-salt');
  const now = Date.parse('2026-11-20T10:00:01Z');
  let id = 1;
  agg.add(normalize(SECRET_LINE, now), id++, findSecrets(SECRET_LINE).length, now);
  for (let i = 0; i < 12; i++) agg.add(normalize(JSON.stringify({ ts: '2026-11-20T10:00:00Z', host: 'web-01', type: 'auth', user: `user${i % 4}`, src_ip: `203.0.113.${i}`, outcome: 'failure' }), now), id++, 0, now);
  agg.add(normalize('{"ts":"2026-11-20T10:00:00Z","host":"web-01","metric":"latency","value":30}', now), id++, 0, now);
  const { records } = agg.flush(now);
  const p = { schema: P.SCHEMA, payload_id: '3b241101-e2bb-4255-8caf-4136c566a962', collector_id: 'col-0123456789', seq: 1, created_at: '2026-11-20T10:00:02.000Z', source_tz: 'UTC', region: 'ap-south', policy_version: P.POLICY_VERSION, stream: 'simulated', records };
  assert.deepEqual(P.validatePayload(p), []);
  const body = P.canonical(p);
  for (const leak of ['S3cr3t', 'AKIA', 'postgres', 'user1', '203.0.113', 'web-01', 'db-01', 'password']) assert.ok(!body.includes(leak), leak);
  const sec = records.find(r => r.kind === 'security_summary');
  assert.equal(sec.failed_count, 12); assert.equal(sec.distinct_accounts, 4); assert.equal(sec.distinct_origins, 12); assert.equal(sec.severity, 'error');
  assert.equal(records.find(r => r.kind === 'log_summary' && r.redactions > 0).redactions, 3);
});
