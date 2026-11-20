'use strict';
// Scenario tools for the demo (they talk to the real collector and SaaS; nothing is faked):
//   verify    — compare collector sent IDs with SaaS received IDs (zero loss, zero duplicates)
//   replay    — resend the last acked payload (duplicate) + send a late payload (out-of-order)
//   residency — present an eu-west tenant's credential to the ap-south ingest (expect 421)
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const https = require('node:https');
const crypto = require('node:crypto');
const P = require('../shared/policy');

const ROOT = path.join(__dirname, '..');
const NAME = process.env.COLLECTOR || 'acme-site-1';
const cfg = n => JSON.parse(fs.readFileSync(path.join(ROOT, '.local', 'collectors', `${n}.json`), 'utf8'));
const INJECTED = path.join(ROOT, '.local', 'replay-injected-ids.json');   // so verify can tell tool traffic apart
const readInjected = () => { try { return JSON.parse(fs.readFileSync(INJECTED, 'utf8')); } catch { return []; } };
const agent = new https.Agent({ ca: fs.readFileSync(path.join(ROOT, '.local', 'certs', 'ca.crt')) });

function request(url, { method = 'GET', body, headers = {} } = {}) {
  return new Promise((resolve, reject) => {
    const u = new URL(url);
    const req = (u.protocol === 'https:' ? https : http).request(u, { method, agent: u.protocol === 'https:' ? agent : undefined, headers: { ...(body ? { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body) } : {}), ...headers } }, res => {
      let d = ''; res.on('data', c => { d += c; }); res.on('end', () => { let j = null; try { j = JSON.parse(d); } catch { /* keep raw */ } resolve({ status: res.statusCode, json: j }); });
    });
    req.on('error', reject); req.end(body);
  });
}

async function verify() {
  const c = cfg(NAME);
  const local = (await request(`http://127.0.0.1:${c.ui_port}/api/delivery`)).json;
  const remote = (await request(new URL('/v1/delivery/ids', c.saas_url).href, { headers: { authorization: `Bearer ${c.key}` } })).json;
  const rec = new Set(remote.received);
  const missing = local.acked.filter(id => !rec.has(id));
  const injected = new Set(readInjected());
  const unknown = remote.received.filter(id => !local.created.includes(id) && !injected.has(id));
  if (injected.size) console.log(`(${injected.size} payload(s) sent by the replay tool are excluded)`);
  const dupStored = remote.received.length - rec.size;
  console.log(`collector ${local.collector_id}`);
  console.log(`  created ${local.created.length} · acked ${local.acked.length} · still buffered ${local.pending.length} · rejected ${local.rejected.length}`);
  console.log(`SaaS received ${remote.received.length} unique payloads · duplicate deliveries ignored ${remote.duplicate_deliveries_ignored}`);
  console.log(`  acked but missing at SaaS: ${missing.length}   received but never created: ${unknown.length}   duplicates stored: ${dupStored}`);
  const ok = !missing.length && !unknown.length && !dupStored;
  console.log(ok ? 'PASS — zero loss, zero duplicates' : 'FAIL');
  if (local.pending.length) console.log(`note: ${local.pending.length} payload(s) still buffered; run again after the backlog drains.`);
  process.exitCode = ok ? 0 : 1;
}

async function replay() {
  const c = cfg(NAME);
  const st = (await request(`http://127.0.0.1:${c.ui_port}/api/state`)).json;
  const last = st.payloads.find(p => p.status === 'acked');
  if (!last) throw new Error('no acked payload yet');
  const ingest = (body, digest) => request(new URL('/v1/ingest', c.saas_url).href, { method: 'POST', body, headers: { authorization: `Bearer ${c.key}`, 'x-payload-digest': digest } });

  const dup = await ingest(last.body, last.passport.sha256);
  console.log(`1) Resent payload ${last.payload_id} (network-level duplicate) → HTTP ${dup.status} status=${dup.json?.status}, records stored=${dup.json?.records_stored}`);

  // A valid, policy-checked payload whose event time is 45 s in the past: arrives late, out of order.
  const orig = JSON.parse(last.body);
  const metric = orig.records.find(r => r.kind === 'metric' && r.metric === 'cpu_pct') || orig.records.find(r => r.kind === 'metric');
  const t = new Date(Date.now() - 45000).toISOString();
  const p = { ...orig, payload_id: crypto.randomUUID(), created_at: t, records: [{ ...metric, event_time: t }] };
  const errs = P.validatePayload(p);
  if (errs.length) throw new Error(errs.join('; '));
  const body = P.canonical(p);
  fs.writeFileSync(INJECTED, JSON.stringify([...readInjected(), p.payload_id]));
  const late = await ingest(body, P.sha256(body));
  console.log(`2) Sent late payload ${p.payload_id} for ${metric.source_id} ${metric.metric} @ ${t} → HTTP ${late.status} status=${late.json?.status}, late_records=${late.json?.late_records}`);
  console.log('   The record is stored and drawn at its event time; it does not overwrite the latest value or the baseline.');
}

async function residency() {
  const c = cfg('globex-site-1');
  const target = process.env.SAAS_URL || 'https://localhost:8443';
  const hb = { schema: P.HB_SCHEMA, collector_id: P.pseudonym('demo', 'col', c.name), sent_at: new Date().toISOString(), version: '1.0.0', cpu_pct: 1, rss_mb: 50, buffered: 0, config_hash: '000000000000', policy_version: P.POLICY_VERSION, stream: 'simulated' };
  const r = await request(new URL('/v1/heartbeat', target).href, { method: 'POST', body: P.canonical(hb), headers: { authorization: `Bearer ${c.key}` } });
  console.log(`Tenant globex (home ${c.region}) → ingest ${target} (ap-south): HTTP ${r.status}`);
  console.log(`  ${r.json?.error}`);
}

const cmd = { verify, replay, residency }[process.argv[2]];
if (!cmd) { console.log('usage: node scripts/scenario.js verify|replay|residency'); process.exit(2); }
cmd().catch(e => { console.error(e.message); process.exit(1); });
