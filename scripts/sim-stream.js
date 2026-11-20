'use strict';
// TEAM-SIMULATED stream — synthetic data only, labelled "team-simulated" end to end.
// No organizer connection. No real credentials, IPs, or user data.
// Serves NDJSON at GET /stream; scenarios via POST /inject/<name>. Loopback only (127.0.0.1).
const http = require('node:http');

const PORT = Number(process.env.SIM_PORT || 7200);
// Synthetic hosts — fictional names, no real infrastructure.
const HOSTS = {
  'web-01': { cpu: 35, mem: 58, disk: 61, latency: 24, loss: 0.1, bw: 140 },
  'db-01': { cpu: 42, mem: 71, disk: 68, latency: 12, loss: 0.05, bw: 90 },
  'edge-gw-01': { cpu: 22, mem: 40, disk: 35, latency: 30, loss: 0.2, bw: 420 },
};
const SCENARIOS = {
  cpu:      { host: 'db-01',      secs: 40, fx: { cpu: [96, 2] } },
  latency:  { host: 'edge-gw-01', secs: 40, fx: { latency: [450, 40], loss: [3.5, 0.5] } },
  incident: { host: 'web-01',     secs: 40, fx: { cpu: [93, 3], latency: [380, 30], loss: [4, 0.5], up: [0, 0] } },
  stale:    { host: 'db-01',      secs: 45, silent: true },
};
const clients = new Set();
let active = [];          // { name, host, until, fx, silent }
let bursts = [];          // failed-login bursts: { until }
let lateEventPending = false;  // flag: emit a backdated event next tick
let dupBuffer = null;          // last metric event for duplicate replay

const r2 = x => Math.round(x * 100) / 100;
const around = (v, pct) => v * (1 + (Math.random() * 2 - 1) * pct);
const emit = o => { const line = JSON.stringify(o) + '\n'; for (const c of clients) c.write(line); };
const pick = a => a[Math.floor(Math.random() * a.length)];

setInterval(() => {
  const now = Date.now();
  const ts = new Date(now).toISOString();
  active = active.filter(a => a.until > now);
  bursts = bursts.filter(b => b.until > now);
  for (const [host, b] of Object.entries(HOSTS)) {
    const mine = active.filter(a => a.host === host);
    if (mine.some(a => a.silent)) continue;
    const fx = Object.assign({}, ...mine.map(a => a.fx));
    const v = (k, base, pct) => (fx[k] ? fx[k][0] + (Math.random() * 2 - 1) * fx[k][1] : around(base, pct));
    const m = {
      cpu: v('cpu', b.cpu, 0.08), memory: v('mem', b.mem, 0.02), disk: b.disk, latency: v('latency', b.latency, 0.12),
      packet_loss: Math.max(0, v('loss', b.loss, 0.5)), bandwidth: around(b.bw, 0.1), up: fx.up ? fx.up[0] : 1,
    };
    for (const [metric, value] of Object.entries(m)) {
      const evt = { ts, host, type: 'metric', metric, value: r2(value) };
      emit(evt);
      // Keep the last normal metric for duplicate-replay scenario
      if (!dupBuffer && metric === 'cpu') dupBuffer = evt;
      else if (metric === 'cpu') dupBuffer = evt;
    }
  }
  if (Math.random() < 0.4) emit({ ts, host: pick(Object.keys(HOSTS)), type: 'log', level: 'info', category: 'app', message: `GET /api/orders/${1000 + Math.floor(Math.random() * 9000)} 200 ${Math.floor(around(40, 0.5))}ms` });
  if (Math.random() < 0.15) emit({ ts, host: 'web-01', type: 'auth', user: pick(['alice', 'bob', 'carol']), src_ip: '10.0.4.21', outcome: 'success' });
  for (let i = 0; i < bursts.length * 2; i++) {
    const user = pick(['admin', 'root', 'oracle', 'test', 'alice', 'deploy']);
    const ip = `203.0.113.${10 + Math.floor(Math.random() * 40)}`;   // TEST-NET-3 documentation range
    if (Math.random() < 0.5) emit({ ts, host: 'web-01', type: 'auth', user, src_ip: ip, outcome: 'failure' });
    else emit({ ts, host: 'web-01', type: 'log', level: 'warning', category: 'security', message: `sshd[811]: Failed password for invalid user ${user} from ${ip} port ${40000 + i} ssh2` });
  }
  // Late-event injection: emit a backdated event (45 s in the past) so the collector can flag it
  if (lateEventPending) {
    lateEventPending = false;
    const lateTs = new Date(now - 45000).toISOString();
    emit({ ts: lateTs, host: 'db-01', type: 'metric', metric: 'cpu', value: r2(around(42, 0.1)), _sim_note: 'late-event-45s' });
    emit({ ts: new Date(now).toISOString(), host: 'web-01', type: 'log', level: 'warning', category: 'system', message: '[TEAM-SIMULATED] Late event injected: timestamp is 45 s before arrival' });
    console.log(`[sim] late-event emitted ts=${lateTs}`);
  }
}, 1000);

function inject(name) {
  const now = Date.now();
  if (name === 'clear') { active = []; bursts = []; lateEventPending = false; return { cleared: true }; }
  if (name === 'bruteforce') { bursts.push({ until: now + 20000 }); return { host: 'web-01', until: new Date(now + 20000).toISOString() }; }
  if (name === 'secret') {
    // Synthetic credential pattern — fictional, no real credentials.
    emit({ ts: new Date(now).toISOString(), host: 'db-01', type: 'log', level: 'error', category: 'app',
      message: 'DB connect failed: postgres://app_user:S3cr3t-Pa55@10.20.0.5:5432/orders password=S3cr3t-Pa55 aws_key=AKIAIOSFODNN7EXAMPLE' });
    return { host: 'db-01', emitted: 1 };
  }
  if (name === 'late') {
    // Schedule a late event (45 s backdated timestamp) to be emitted on the next tick.
    lateEventPending = true;
    return { host: 'db-01', scenario: 'late-event', note: 'Next tick will emit a metric with timestamp 45 s in the past' };
  }
  if (name === 'duplicate') {
    // Re-emit the last captured metric event immediately so the collector can deduplicate it.
    if (!dupBuffer) return { error: 'no event buffered yet; wait a moment and retry' };
    emit(dupBuffer);
    console.log(`[sim] duplicate emitted ts=${dupBuffer.ts}`);
    return { host: dupBuffer.host, scenario: 'duplicate', note: 'Identical event re-sent; collector should detect it in audit log' };
  }
  if (name === 'outage') {
    // Simulate a 20-second source outage on web-01 (goes silent), then auto-recovers.
    active.push({ name: 'outage', host: 'web-01', until: now + 20000, fx: {}, silent: true });
    // Schedule a recovery notification event after 20 s
    setTimeout(() => {
      emit({ ts: new Date().toISOString(), host: 'web-01', type: 'log', level: 'info', category: 'system',
        message: '[TEAM-SIMULATED] web-01 recovered from 20-second simulated outage' });
      console.log('[sim] outage/recovery: web-01 recovered');
    }, 20000);
    return { host: 'web-01', scenario: 'outage', silent_until: new Date(now + 20000).toISOString(), auto_recovery_ms: 20000 };
  }
  const s = SCENARIOS[name];
  if (!s) return null;
  active.push({ name, host: s.host, until: now + s.secs * 1000, fx: s.fx || {}, silent: !!s.silent });
  return { host: s.host, until: new Date(now + s.secs * 1000).toISOString() };
}

http.createServer((req, res) => {
  const u = new URL(req.url, 'http://127.0.0.1');
  if (req.method === 'GET' && u.pathname === '/stream') {
    res.writeHead(200, { 'content-type': 'application/x-ndjson', 'cache-control': 'no-store' });
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  if (req.method === 'POST' && u.pathname.startsWith('/inject/')) {
    const name = decodeURIComponent(u.pathname.slice('/inject/'.length));
    const r = inject(name);
    const at = new Date().toISOString();
    if (r) console.log(`[sim] ${at} injected ${name} ${JSON.stringify(r)}`);
    res.writeHead(r ? 200 : 404, { 'content-type': 'application/json' });
    return res.end(JSON.stringify(r ? { scenario: name, injected_at: at, label: 'SIMULATED', ...r } : { error: `unknown scenario ${name}` }));
  }
  res.writeHead(404); res.end();
}).listen(PORT, '127.0.0.1', () => console.log(`[sim] TEAM-SIMULATED stream http://127.0.0.1:${PORT}/stream — not organizer evidence`));
