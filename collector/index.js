'use strict';
// Tier 1 · local collector. Raw data lives in collector.db on this machine only. The ONLY egress is
// sender()/heartbeat() -> HTTPS to the regional SaaS, and the body is always a validated sp-policy-1 payload.
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const https = require('node:https');
const crypto = require('node:crypto');
const { DatabaseSync } = require('node:sqlite');
const P = require('../shared/policy');
const { statePath, ensureStateDir } = require('../shared/state-dir');
const { findSecrets, normalize, Aggregator, DEFAULT_MAPPING } = require('./pipeline');

const VERSION = '1.0.0';
const NAME = process.env.COLLECTOR || 'acme-site-1';
if (!/^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/.test(NAME)) throw new Error('COLLECTOR must be 1–64 letters, numbers, underscores, or hyphens');
process.umask(0o077);
ensureStateDir();
const cfgPath = statePath('collectors', `${NAME}.json`);
if (!fs.existsSync(cfgPath)) { console.error(`Missing ${cfgPath}. Run: npm run setup`); process.exit(1); }
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const CA = fs.readFileSync(statePath('certs', 'ca.crt'));
const STREAM_FILE = process.env.STREAM_FILE || '';
const STREAM_URL = process.env.STREAM_URL || (STREAM_FILE ? '' : 'http://127.0.0.1:7200/stream');
const STREAM_AUTH_HEADER_NAME = process.env.STREAM_AUTH_HEADER_NAME || '';
const STREAM_AUTH_HEADER_VALUE = process.env.STREAM_AUTH_HEADER_VALUE || '';
const STREAM_BEARER_TOKEN = process.env.STREAM_BEARER_TOKEN || '';
if (STREAM_AUTH_HEADER_NAME && STREAM_BEARER_TOKEN) throw new Error('Set either STREAM_BEARER_TOKEN or STREAM_AUTH_HEADER_NAME/VALUE, not both');
if (!!STREAM_AUTH_HEADER_NAME !== !!STREAM_AUTH_HEADER_VALUE) throw new Error('STREAM_AUTH_HEADER_NAME and STREAM_AUTH_HEADER_VALUE must be set together');
if (STREAM_AUTH_HEADER_NAME && (!/^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/.test(STREAM_AUTH_HEADER_NAME) || /^(host|content-length|transfer-encoding|connection)$/i.test(STREAM_AUTH_HEADER_NAME))) {
  throw new Error('STREAM_AUTH_HEADER_NAME is not an allowed header name');
}
const STREAM_HEADERS = STREAM_BEARER_TOKEN
  ? { authorization: `Bearer ${STREAM_BEARER_TOKEN}` }
  : STREAM_AUTH_HEADER_NAME ? { [STREAM_AUTH_HEADER_NAME]: STREAM_AUTH_HEADER_VALUE } : {};
// Default label is "simulated"; the organizer label must be set explicitly so we never over-claim.
const STREAM_KIND = process.env.STREAM_KIND === 'organizer' ? 'organizer' : 'simulated';
const WINDOW_MS = Number(process.env.WINDOW_MS || 2000);
const RAW_TTL_MIN = Number(process.env.RAW_TTL_MIN || 60);
const UI_PORT = Number(process.env.UI_PORT || cfg.ui_port || 7100);
const SAAS_URL = process.env.SAAS_URL || cfg.saas_url;
const MAPPING = process.env.STREAM_MAPPING ? JSON.parse(fs.readFileSync(process.env.STREAM_MAPPING, 'utf8')) : DEFAULT_MAPPING;
const BUFFER_CAP = 50000;
const streamUrl = STREAM_URL ? new URL(STREAM_URL) : null;
if (streamUrl && !['http:', 'https:'].includes(streamUrl.protocol)) throw new Error('STREAM_URL must use HTTP or HTTPS');
if (streamUrl?.username || streamUrl?.password) throw new Error('Do not put credentials in STREAM_URL; configure a stream auth header instead');
const streamHasAuth = Object.keys(STREAM_HEADERS).length > 0;
const streamIsLoopback = streamUrl && (streamUrl.hostname === 'localhost' || streamUrl.hostname === '::1' || /^127(?:\.\d{1,3}){3}$/.test(streamUrl.hostname));
if (streamHasAuth && streamUrl?.protocol !== 'https:' && !streamIsLoopback) throw new Error('Authenticated remote streams require HTTPS');
if (/[\r\n]/.test(STREAM_AUTH_HEADER_VALUE) || /[\r\n]/.test(STREAM_BEARER_TOKEN)) throw new Error('Stream auth values cannot contain line breaks');
const streamSource = STREAM_FILE ? 'file stream' : streamUrl ? `${streamUrl.protocol.slice(0, -1).toUpperCase()} endpoint` : 'not configured';
const safeSaasOrigin = (() => { try { return new URL(SAAS_URL).origin; } catch { return 'configured endpoint'; } })();

const dataDir = statePath('collector-data', NAME);
fs.mkdirSync(dataDir, { recursive: true, mode: 0o700 });
const saltPath = path.join(dataDir, 'salt');
if (!fs.existsSync(saltPath)) fs.writeFileSync(saltPath, crypto.randomBytes(32).toString('hex'), { mode: 0o600 });
const SALT = fs.readFileSync(saltPath, 'utf8');            // never leaves this machine
const COLLECTOR_ID = P.pseudonym(SALT, 'col', NAME);
const CONFIG_HASH = P.sha256(P.canonical({ policy: P.POLICY_VERSION, region: cfg.region, window: WINDOW_MS, stream: STREAM_KIND, mapping: MAPPING })).slice(0, 12);

// Wait up to 5 s for a lock held by another connection instead of crashing on SQLITE_BUSY (C5a).
const db = new DatabaseSync(path.join(dataDir, 'collector.db'), { timeout: 5000 });
db.exec(`
  pragma journal_mode = WAL;
  create table if not exists raw(id integer primary key, received_at integer, ts text, host text, kind text, line text, hits text, payload_id text);
  create table if not exists outbox(seq integer primary key, payload_id text unique, body text, passport text, status text, created_at text,
    attempts integer default 0, acked_at text, receipt text, match integer);
  create table if not exists audit(id integer primary key, at text, payload_id text, event text, detail text);
  create table if not exists delivery_stats(name text primary key, value integer not null);
  insert or ignore into delivery_stats(name, value) values ('dropped_buffer_cap', 0);
  create index if not exists outbox_status on outbox(status, seq);`);
const q = {
  insertRaw: db.prepare('insert into raw(received_at, ts, host, kind, line, hits) values (?,?,?,?,?,?)'),
  linkRaw: db.prepare('update raw set payload_id = ? where id between ? and ? and payload_id is null'),
  maxSeq: db.prepare('select max(seq) s from outbox'),
  insertOutbox: db.prepare("insert into outbox(seq, payload_id, body, passport, status, created_at) values (?,?,?,?,'pending',?)"),
  nextPending: db.prepare("select * from outbox where status = 'pending' order by seq limit 1"),
  pendingCount: db.prepare("select count(*) n from outbox where status = 'pending'"),
  oldestPending: db.prepare("select seq, payload_id, body from outbox where status = 'pending' order by seq limit 200"),
  dropped: db.prepare("select payload_id from audit where event = 'dropped_buffer_cap' order by id"),
  droppedCount: db.prepare("select value n from delivery_stats where name = 'dropped_buffer_cap'"),
  incrementDropped: db.prepare("update delivery_stats set value = value + 1 where name = 'dropped_buffer_cap'"),
  dropPending: db.prepare('delete from outbox where seq = ?'),
  attempt: db.prepare('update outbox set attempts = attempts + 1 where seq = ?'),
  ack: db.prepare("update outbox set status = 'acked', acked_at = ?, receipt = ?, match = ? where seq = ?"),
  reject: db.prepare("update outbox set status = 'rejected', receipt = ? where seq = ?"),
  audit: db.prepare('insert into audit(at, payload_id, event, detail) values (?,?,?,?)'),
  // Metrics arrive ~25/s and would scroll a secret off screen, so the raw view is filterable.
  recentRaw: {
    logs: db.prepare("select id, received_at, ts, host, kind, line, hits, payload_id from raw where kind <> 'metric' order by id desc limit 60"),
    secrets: db.prepare("select id, received_at, ts, host, kind, line, hits, payload_id from raw where hits <> '[]' order by id desc limit 60"),
    all: db.prepare('select id, received_at, ts, host, kind, line, hits, payload_id from raw order by id desc limit 60'),
  },
  recentOutbox: db.prepare('select * from outbox order by seq desc limit 30'),
  payloadById: db.prepare('select * from outbox where payload_id = ?'),
  recentAudit: db.prepare('select * from audit order by id desc limit 40'),
  allOutbox: db.prepare('select payload_id, status from outbox order by seq'),
  counts: db.prepare(`select (select count(*) from raw) raw_rows, (select coalesce(sum(json_array_length(hits)),0) from raw) secrets_seen,
    (select count(*) from outbox where status='acked') acked, (select count(*) from outbox where status='rejected') rejected`),
};
const audit = (pid, event, detail = '') => q.audit.run(new Date().toISOString(), pid, event, String(detail).slice(0, 500));

// ---- 1. Organizer telemetry adapter (NDJSON / SSE over HTTP(S), or a tailed file) ------------------
const stream = { kind: STREAM_KIND, source: streamSource, connected: false, events: 0, unmapped: 0, lastError: null };
const agg = new Aggregator(SALT);
const hosts = new Set(db.prepare('select distinct host from raw').all().map(r => r.host));

function onLine(line) {
  line = line.replace(/\r$/, '');
  if (line.startsWith('data:')) line = line.slice(5).trimStart();
  if (!line.trim() || line.startsWith(':') || /^(event|id|retry):/.test(line)) return;
  const now = Date.now();
  const e = normalize(line, now, MAPPING);
  const hits = findSecrets(line);
  const id = Number(q.insertRaw.run(now, e.ts, e.host, e.type, line, JSON.stringify(hits)).lastInsertRowid);
  stream.events++;
  if (e.type === 'unmapped') stream.unmapped++;
  hosts.add(e.host);
  agg.add(e, id, hits.length, now);
}
function splitLines(state, chunk) {
  state.buf += chunk;
  let i;
  while ((i = state.buf.indexOf('\n')) >= 0) { onLine(state.buf.slice(0, i)); state.buf = state.buf.slice(i + 1); }
}
function readUrl() {
  const st = { buf: '' };
  let done = false;
  const retry = msg => { if (done) return; done = true; stream.connected = false; stream.lastError = msg; setTimeout(readUrl, 1000); };
  const req = (STREAM_URL.startsWith('https') ? https : http).get(STREAM_URL, { headers: STREAM_HEADERS }, res => {
    if (res.statusCode !== 200) { res.resume(); return retry(`HTTP ${res.statusCode}`); }
    stream.connected = true; stream.lastError = null;
    res.setEncoding('utf8');
    res.on('data', c => splitLines(st, c));
    res.on('end', () => retry('stream ended'));
    res.on('error', () => retry('stream read error'));
  });
  req.on('error', e => retry(e.code || 'stream connection error'));
}
function readFile() {
  const st = { buf: '' };
  let pos = process.env.STREAM_FROM_START ? 0 : (fs.existsSync(STREAM_FILE) ? fs.statSync(STREAM_FILE).size : 0);
  stream.connected = true;
  setInterval(() => {
    let size;
    try { size = fs.statSync(STREAM_FILE).size; } catch { stream.lastError = 'file stream unavailable'; return; }
    if (size < pos) pos = 0;                 // file rotated/truncated
    if (size === pos) return;
    const b = Buffer.alloc(size - pos);
    const fd = fs.openSync(STREAM_FILE, 'r');
    fs.readSync(fd, b, 0, b.length, pos); fs.closeSync(fd);
    pos = size;
    splitLines(st, b.toString('utf8'));
  }, 250);
}

// ---- 2/3. Aggregate -> policy -> canonical body -> Signal Passport -> outbox ------------------------
function flush() {
  const { records, rawIds } = agg.flush(Date.now());
  if (!records.length) return;
  for (let i = 0; i < records.length; i += P.MAX_RECORDS) enqueue(records.slice(i, i + P.MAX_RECORDS), i === 0 ? rawIds : []);
}
function enqueue(records, rawIds) {
  const seq = (q.maxSeq.get().s ?? 0) + 1;
  const p = {
    schema: P.SCHEMA, payload_id: crypto.randomUUID(), collector_id: COLLECTOR_ID, seq,
    created_at: new Date().toISOString(), source_tz: cfg.tz, region: cfg.region,
    policy_version: P.POLICY_VERSION, stream: STREAM_KIND, records,
  };
  const errs = P.validatePayload(p);
  if (errs.length) { audit(p.payload_id, 'policy_reject_local', errs.slice(0, 5).join('; ')); return; } // never leaves
  const body = P.canonical(p);
  const passport = P.buildPassport(p, body);
  q.insertOutbox.run(seq, p.payload_id, body, JSON.stringify(passport), p.created_at);
  if (rawIds.length) q.linkRaw.run(p.payload_id, rawIds[0], rawIds[rawIds.length - 1]);   // ids are ascending
  enforceCap();
}
function enforceCap() {
  if (q.pendingCount.get().n <= BUFFER_CAP) return;
  // Security summaries are never dropped; the oldest metric-only batch goes first, with an audit row.
  const victim = q.oldestPending.all().find(r => !r.body.includes('"kind":"security_summary"'));
  if (victim) {
    db.exec('begin');
    try {
      q.dropPending.run(victim.seq);
      q.incrementDropped.run();
      audit(victim.payload_id, 'dropped_buffer_cap', `cap ${BUFFER_CAP}`);
      db.exec('commit');
    } catch (e) { db.exec('rollback'); throw e; }
  }
}

// ---- 8. Sender: strict seq order, ack only on receipt, backoff 1s->5s, retry forever ----------------
const saas = { reachable: null, lastError: null, lastOkAt: null, downSince: null };
const markUp = () => { saas.reachable = true; saas.lastError = null; saas.downSince = null; saas.lastOkAt = new Date().toISOString(); };
const markDown = msg => { if (saas.reachable !== false) saas.downSince = new Date().toISOString(); saas.reachable = false; saas.lastError = msg; };
const agent = new https.Agent({ ca: CA, keepAlive: true });   // trusts ONLY the demo CA
const sleep = ms => new Promise(r => setTimeout(r, ms));

function post(pathname, body, headers = {}, method = 'POST') {
  return new Promise((resolve, reject) => {
    const req = https.request(new URL(pathname, SAAS_URL), {
      method, agent, timeout: 5000,
      headers: { 'content-type': 'application/json', 'content-length': Buffer.byteLength(body), authorization: `Bearer ${cfg.key}`, ...headers },
    }, res => {
      let d = '';
      res.setEncoding('utf8');
      res.on('data', c => { d += c; });
      res.on('end', () => { let j = null; try { j = JSON.parse(d); } catch { /* non-JSON error body */ } resolve({ status: res.statusCode, json: j }); });
    });
    req.on('timeout', () => req.destroy(new Error('timeout')));
    req.on('error', reject);
    req.end(body);
  });
}

async function sender() {
  let backoff = 1000;
  for (;;) {
    const row = q.nextPending.get();
    if (!row) { await sleep(100); continue; }
    const passport = JSON.parse(row.passport);
    q.attempt.run(row.seq);
    try {
      const r = await post('/v1/ingest', row.body, { 'x-payload-digest': passport.sha256 });
      if (r.status === 200 && r.json?.payload_id === row.payload_id) {
        const duplicate = r.json.status === 'duplicate';
        const match = r.json.received_digest === passport.sha256 && (!duplicate || r.json.stored_digest === passport.sha256);
        if (!match || !['stored', 'duplicate'].includes(r.json.status)) {
          const reason = !match ? 'receipt digest mismatch' : 'unrecognized receipt status';
          markDown(reason);
          audit(row.payload_id, 'receipt_verification_failed', reason);
          await sleep(backoff);
          backoff = Math.min(backoff * 2, 5000);
          continue;
        }
        q.ack.run(new Date().toISOString(), JSON.stringify(r.json), 1, row.seq);
        audit(row.payload_id, duplicate ? 'acked_duplicate' : 'acked', 'receipt digest matches');
        markUp(); backoff = 1000;
        continue;
      }
      if (r.status === 409) {
        q.reject.run(JSON.stringify(r.json), row.seq);
        audit(row.payload_id, 'payload_id_conflict', `HTTP 409 ${JSON.stringify(r.json?.error ?? 'payload ID conflict')}`);
        continue;
      }
      if ([400, 413, 422].includes(r.status)) {   // will never succeed: park it, audit, move on
        q.reject.run(JSON.stringify(r.json), row.seq);
        audit(row.payload_id, 'rejected_by_saas', `HTTP ${r.status} ${JSON.stringify(r.json?.errors ?? r.json?.error ?? '')}`);
        continue;
      }
      throw new Error(`HTTP ${r.status} ${r.json?.error ?? ''}`.trim());
    } catch (e) {
      markDown(errText(e));
      audit(row.payload_id, 'retry', `${errText(e)}; next attempt in ${backoff / 1000}s`);
      await sleep(backoff);
      backoff = Math.min(backoff * 2, 5000);
    }
  }
}

let lastCpu = process.cpuUsage();
let lastCpuT = Date.now();
async function heartbeat() {
  const now = Date.now();
  const c = process.cpuUsage(lastCpu);
  const cpu = ((c.user + c.system) / 1000 / Math.max(1, now - lastCpuT)) * 100;
  lastCpu = process.cpuUsage(); lastCpuT = now;
  const hb = {
    schema: P.HB_SCHEMA, collector_id: COLLECTOR_ID, sent_at: new Date(now).toISOString(), version: VERSION,
    cpu_pct: Math.round(cpu * 10) / 10, rss_mb: Math.round(process.memoryUsage().rss / 1e5) / 10,
    buffered: q.pendingCount.get().n, config_hash: CONFIG_HASH, policy_version: P.POLICY_VERSION, stream: STREAM_KIND,
  };
  try {
    const r = await post('/v1/heartbeat', P.canonical(hb));
    if (r.status === 200) markUp(); else markDown(`heartbeat HTTP ${r.status} ${r.json?.error ?? ''}`);
  } catch (e) { markDown(errText(e)); }
}
// localhost resolves to ::1 and 127.0.0.1, so a refused connect is an AggregateError with an empty message.
const errText = e => e.message || e.code || e.errors?.map(x => x.code || x.message).join(', ') || String(e);

// ---- Local UI (loopback only): raw view + egress proof panel -----------------------------------------
const rowOut = r => ({
  seq: r.seq, payload_id: r.payload_id, status: r.status, created_at: r.created_at, acked_at: r.acked_at,
  attempts: r.attempts, body: r.body, bytes: Buffer.byteLength(r.body), passport: JSON.parse(r.passport),
  receipt: r.receipt ? JSON.parse(r.receipt) : null, match: r.match,
});
function state(rawFilter) {
  return {
    collector: {
      name: NAME, collector_id: COLLECTOR_ID, version: VERSION, region: cfg.region, saas_url: safeSaasOrigin, tz: cfg.tz,
      config_hash: CONFIG_HASH, policy_version: P.POLICY_VERSION, window_ms: WINDOW_MS, raw_ttl_min: RAW_TTL_MIN,
    },
    stream, saas, buffered: q.pendingCount.get().n, counts: q.counts.get(),
    raw: (q.recentRaw[rawFilter] ?? q.recentRaw.logs).all().map(r => ({ ...r, hits: JSON.parse(r.hits) })),
    payloads: q.recentOutbox.all().map(rowOut),
    audit: q.recentAudit.all(),
    pseudonyms: [...hosts].sort().map(h => ({ host: h, source_id: agg.src(h) })),
  };
}
function delivery() {
  const rows = q.allOutbox.all();
  const by = s => rows.filter(r => r.status === s).map(r => r.payload_id);
  return { collector_id: COLLECTOR_ID, created: rows.map(r => r.payload_id), acked: by('acked'), pending: by('pending'), rejected: by('rejected'), dropped: q.dropped.all().map(r => r.payload_id), dropped_total: q.droppedCount.get().n };
}
function injectSim(name) {
  return new Promise((resolve, reject) => {
    const req = http.request(new URL(`/inject/${encodeURIComponent(name)}`, STREAM_URL), { method: 'POST', timeout: 3000 }, res => {
      let d = ''; res.on('data', c => { d += c; }); res.on('end', () => resolve({ status: res.statusCode, body: d }));
    });
    req.on('error', reject); req.end();
  });
}

const UI_HOSTS = new Set([`127.0.0.1:${UI_PORT}`, `localhost:${UI_PORT}`]);
http.createServer(async (req, res) => {
  const send = (code, obj, type = 'application/json') => {
    res.writeHead(code, { 'content-type': type, 'cache-control': 'no-store', 'x-content-type-options': 'nosniff' });
    res.end(type === 'application/json' ? JSON.stringify(obj) : obj);
  };
  // Raw data is served here: refuse DNS-rebinding hosts and cross-site POSTs.
  if (!UI_HOSTS.has(req.headers.host)) return send(403, { error: 'loopback host only' });
  const u = new URL(req.url, 'http://127.0.0.1');
  try {
    if (req.method === 'GET' && u.pathname === '/') return send(200, fs.readFileSync(path.join(__dirname, 'ui.html')), 'text/html; charset=utf-8');
    if (req.method === 'GET' && u.pathname === '/demo') return send(200, fs.readFileSync(path.join(__dirname, 'demo.html')), 'text/html; charset=utf-8');
    if (req.method === 'GET' && u.pathname === '/api/state') return send(200, state(u.searchParams.get('raw')));
    if (req.method === 'GET' && u.pathname === '/api/delivery') return send(200, delivery());
    if (req.method === 'GET' && u.pathname.startsWith('/api/payload/')) {
      const row = q.payloadById.get(decodeURIComponent(u.pathname.slice('/api/payload/'.length)));
      return row ? send(200, rowOut(row)) : send(404, { error: 'not found' });
    }
    if (req.method === 'POST' && u.pathname.startsWith('/api/inject/')) {
      if (req.headers['x-sp-ui'] !== '1') return send(403, { error: 'missing x-sp-ui header' });
      if (STREAM_KIND !== 'simulated' || !STREAM_URL) return send(409, { error: 'injection is for the simulator; use organizer tools for the organizer stream' });
      const r = await injectSim(u.pathname.slice('/api/inject/'.length));
      return send(r.status, JSON.parse(r.body || '{}'));
    }
    send(404, { error: 'not found' });
  } catch (e) { send(500, { error: e.message }); }
}).listen(UI_PORT, '127.0.0.1', () => {
  console.log(`[collector ${NAME}] ${COLLECTOR_ID} region=${cfg.region} stream=${STREAM_KIND} (${stream.source})`);
  console.log(`[collector ${NAME}] local UI  http://127.0.0.1:${UI_PORT}   egress -> ${safeSaasOrigin}`);
});

// ---- Local retention ---------------------------------------------------------------------------------
function purge() {
  const now = Date.now();
  db.prepare('delete from raw where received_at < ?').run(now - RAW_TTL_MIN * 60000);
  db.prepare("delete from outbox where status = 'acked' and acked_at < ? and seq < (select max(seq) from outbox)").run(new Date(now - 86400000).toISOString());
  db.prepare('delete from audit where at < ?').run(new Date(now - 86400000).toISOString());
}

// Crash recovery: raw rows never batched (hard kill mid-window) are re-aggregated, so egress loses nothing.
const unsent = db.prepare('select id, received_at, line, hits from raw where payload_id is null order by id').all();
for (const r of unsent) agg.add(normalize(r.line, r.received_at, MAPPING), r.id, JSON.parse(r.hits).length, r.received_at);
if (unsent.length) { flush(); audit(null, 'recovered_unsent_raw', `${unsent.length} raw rows re-aggregated after restart`); }

if (STREAM_URL) readUrl(); else readFile();
setInterval(flush, WINDOW_MS);
setInterval(heartbeat, 5000); heartbeat();
setInterval(purge, 60000); purge();
sender();
process.on('SIGINT', () => { flush(); db.close(); process.exit(0); });   // keep the last window
