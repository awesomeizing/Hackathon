'use strict';
// Tier 2 · regional SaaS ingest + dashboard API. The tenant is derived ONLY from the presented credential;
// no request parameter can select a tenant. Tenants homed in another region get 421 and nothing is written.
const fs = require('node:fs');
const path = require('node:path');
const https = require('node:https');
const http = require('node:http');
const P = require('../shared/policy');
const { statePath, ensureStateDir } = require('../shared/state-dir');
const { TenantStore } = require('./engine');

process.umask(0o077);
ensureStateDir();
const REGION = process.env.REGION || 'ap-south';
const PORT = Number(process.env.PORT || 8443);
const HTTP_PORT = Number(process.env.DASHBOARD_HTTP_PORT || 8080);
const BIND_HOST = process.env.BIND_HOST || '127.0.0.1';
const registry = JSON.parse(fs.readFileSync(statePath('tenants.json'), 'utf8'));
const thresholds = JSON.parse(fs.readFileSync(path.join(__dirname, 'config', 'thresholds.json'), 'utf8'));

const byCollectorKey = new Map();
const byViewer = new Map();
for (const t of registry.tenants) {
  for (const h of t.collector_key_sha256) byCollectorKey.set(h, t);
  byViewer.set(t.viewer_token_sha256, t);
}
const stores = new Map();
const storeFor = t => {
  if (t.home_region !== REGION) return null;   // residency: never open a store for a foreign tenant
  if (!stores.has(t.id)) stores.set(t.id, new TenantStore(t, REGION, statePath('saas-data', REGION), thresholds));
  return stores.get(t.id);
};
for (const t of registry.tenants) storeFor(t);
setInterval(() => { for (const s of stores.values()) s.tick(); }, 1000);

const bearerHash = req => { const m = /^Bearer (\S{16,200})$/.exec(req.headers.authorization || ''); return m ? P.sha256(m[1]) : null; };
function readBody(req, limit) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let n = 0;
    req.on('data', c => { n += c.length; if (n > limit) { reject(Object.assign(new Error('payload too large'), { status: 413 })); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}
const json = async req => { try { return JSON.parse((await readBody(req, 64 * 1024)).toString('utf8') || '{}'); } catch { return {}; } };

function timesSane(p, nowMs) {
  const ok = iso => { const ms = Date.parse(iso); return ms <= nowMs + 5 * 60000 && ms >= nowMs - 24 * 3600000; };
  return ok(p.created_at) && p.records.every(r => ok(r.event_time));
}

async function collectorApi(req, res, u, send) {
  const keyHash = bearerHash(req);
  const t = keyHash && byCollectorKey.get(keyHash);
  if (!t) return send(401, { error: 'unknown collector credential' });
  if (t.home_region !== REGION) {
    console.warn(`[saas ${REGION}] 421 residency: tenant ${t.id} is homed in ${t.home_region}; nothing stored`);
    return send(421, { error: `tenant data must reside in ${t.home_region}; this ingest endpoint is ${REGION}. Nothing was stored.`, home_region: t.home_region });
  }
  const s = storeFor(t);
  const now = Date.now();

  if (req.method === 'POST' && u.pathname === '/v1/ingest') {
    const body = await readBody(req, P.MAX_BODY);
    const digest = P.sha256(body);
    if (req.headers['x-payload-digest'] !== digest) { s.audit('ingest', 'ingest_reject', { reason: 'digest header does not match body' }); return send(400, { error: 'X-Payload-Digest does not match body' }); }
    let p;
    try { p = JSON.parse(body.toString('utf8')); } catch { return send(400, { error: 'invalid JSON' }); }
    const errs = P.validatePayload(p);
    if (errs.length) {
      s.audit('ingest', 'ingest_reject', { reason: 'policy violation', errors: errs.slice(0, 10) });   // the body itself is never stored
      return send(422, { error: 'policy violation: payload not stored', errors: errs.slice(0, 10) });
    }
    if (p.region !== REGION) return send(421, { error: `payload addressed to ${p.region}, this is ${REGION}` });
    if (!s.bindCollector(p.collector_id, keyHash)) return send(403, { error: 'credential is bound to a different collector' });
    if (!timesSane(p, now)) return send(422, { error: 'timestamps outside accepted window (-24h..+5min)' });
    const receipt = s.ingest(p, digest, now);
    return send(receipt.status === 'conflict' ? 409 : 200, receipt);
  }
  if (req.method === 'POST' && u.pathname === '/v1/heartbeat') {
    let hb;
    try { hb = JSON.parse((await readBody(req, 4096)).toString('utf8')); } catch { return send(400, { error: 'invalid JSON' }); }
    const errs = P.validateHeartbeat(hb);
    if (errs.length) return send(422, { error: 'policy violation', errors: errs });
    if (!s.bindCollector(hb.collector_id, keyHash)) return send(403, { error: 'credential is bound to a different collector' });
    s.heartbeat(hb, now);
    return send(200, { ok: true, received_at: new Date(now).toISOString() });
  }
  if (req.method === 'GET' && u.pathname === '/v1/delivery/ids') {
    const c = s.db.prepare('select collector_id from collectors where key_hash = ?').get(keyHash);
    const ids = c ? s.db.prepare('select payload_id from payloads where collector_id = ? order by seq').all(c.collector_id).map(r => r.payload_id) : [];
    const dups = s.db.prepare("select count(*) n from audit where action = 'ingest_duplicate' and actor = ?").get(`collector:${c?.collector_id}`).n;
    return send(200, { collector_id: c?.collector_id ?? null, received: ids, duplicate_deliveries_ignored: dups });
  }
  send(404, { error: 'not found' });
}

async function viewerApi(req, res, u, send) {
  const t = byViewer.get(bearerHash(req));
  if (!t) return send(401, { error: 'viewer token required' });
  if (t.home_region !== REGION) return send(421, { error: `tenant is served from ${t.home_region}`, home_region: t.home_region });
  const s = storeFor(t);
  const actor = `viewer@${t.id}`;
  if (req.method === 'GET' && u.pathname === '/api/overview') return send(200, s.overview());
  if (req.method === 'GET' && u.pathname === '/api/series') return send(200, s.series(u.searchParams.get('source_id') || '', u.searchParams.get('metric') || ''));
  if (req.method === 'POST' && u.pathname === '/api/timing') { s.addRenderTimings((await json(req)).samples); return send(200, { ok: true }); }
  const m = /^\/api\/incidents\/(\d+)\/(approve|rollback)$/.exec(u.pathname);
  if (req.method === 'POST' && m) {
    const r = m[2] === 'approve' ? s.approve(Number(m[1]), actor) : s.rollback(Number(m[1]), actor);
    return send(r.status, r);
  }
  send(404, { error: 'not found' });
}

const DASHBOARD = path.join(__dirname, 'dashboard.html');
function handler(isTls) {
  return async (req, res) => {
    const send = (code, obj, type = 'application/json') => {
      if (res.headersSent) return;
      res.writeHead(code, { 'content-type': type, 'cache-control': 'no-store', 'x-content-type-options': 'nosniff', 'referrer-policy': 'no-referrer' });
      res.end(type === 'application/json' ? JSON.stringify(obj) : obj);
    };
    const u = new URL(req.url, 'https://localhost');
    try {
      if (u.pathname.startsWith('/v1/')) {
        if (!isTls) return send(403, { error: 'collector traffic must use TLS' });
        return await collectorApi(req, res, u, send);
      }
      if (u.pathname.startsWith('/api/')) return await viewerApi(req, res, u, send);
      if (req.method === 'GET' && u.pathname === '/') return send(200, fs.readFileSync(DASHBOARD), 'text/html; charset=utf-8');
      send(404, { error: 'not found' });
    } catch (e) {
      send(e.status || 500, { error: e.status ? e.message : 'internal error' });
      if (!e.status) console.error(e);
    }
  };
}

const tls = { key: fs.readFileSync(statePath('certs', 'server.key')), cert: fs.readFileSync(statePath('certs', 'server.crt')), minVersion: 'TLSv1.2' };
https.createServer(tls, handler(true)).listen(PORT, BIND_HOST, () => console.log(`[saas ${REGION}] TLS ingest + dashboard https://localhost:${PORT}  bind=${BIND_HOST}  tenants here: ${[...stores.keys()].join(', ')}`));
// Loopback-only plain HTTP for the dashboard so a browser without the demo CA can view it. Collector ingest is refused here.
http.createServer(handler(false)).listen(HTTP_PORT, '127.0.0.1', () => console.log(`[saas ${REGION}] dashboard (loopback) http://127.0.0.1:${HTTP_PORT}`));
