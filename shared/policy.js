'use strict';
// sp-policy-1: the one typed allow-list both tiers enforce. Every string is an enum or a fixed ID
// pattern, so no free text (and therefore no log line or secret) has a field to travel in.
const crypto = require('node:crypto');

const POLICY_VERSION = 'sp-policy-1';
const SCHEMA = 'signal-passport/1';
const HB_SCHEMA = 'signal-passport-heartbeat/1';
const METRICS = ['cpu_pct', 'mem_pct', 'disk_pct', 'bw_mbps', 'latency_ms', 'packet_loss_pct', 'service_up'];
const SEVERITIES = ['info', 'warning', 'error', 'critical'];
const REGIONS = ['ap-south', 'eu-west', 'us-east'];
const STREAMS = ['organizer', 'simulated', 'team-simulated'];
const MAX_RECORDS = 500;
const MAX_BODY = 256 * 1024;

const UTC_RE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const utc = v => typeof v === 'string' && UTC_RE.test(v) && !Number.isNaN(Date.parse(v));
const num = v => typeof v === 'number' && Number.isFinite(v);
const int = v => Number.isInteger(v) && v >= 0;
const oneOf = list => v => list.includes(v);
const match = re => v => typeof v === 'string' && re.test(v);
const tz = v => {
  if (typeof v !== 'string' || !/^(UTC|[A-Z][A-Za-z_]+(\/[A-Za-z0-9_+-]+){1,2})$/.test(v)) return false;
  try { new Intl.DateTimeFormat('en', { timeZone: v }); return true; } catch { return false; }
};
const SRC = match(/^src-[0-9a-f]{10}$/);
const COL = match(/^col-[0-9a-f]{10}$/);
const UUID = match(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);

const ENVELOPE = {
  schema: oneOf([SCHEMA]), payload_id: UUID, collector_id: COL, seq: int, created_at: utc,
  source_tz: tz, region: oneOf(REGIONS), policy_version: oneOf([POLICY_VERSION]),
  stream: oneOf(STREAMS), records: Array.isArray,
};
const RECORDS = {
  metric: {
    kind: oneOf(['metric']), event_time: utc, source_id: SRC, metric: oneOf(METRICS),
    avg: num, max: num, last: num, count: int,
  },
  security_summary: {
    kind: oneOf(['security_summary']), event_time: utc, source_id: SRC, category: oneOf(['auth_failure']),
    window_s: int, failed_count: int, distinct_accounts: int, distinct_origins: int, severity: oneOf(SEVERITIES),
  },
  log_summary: {
    kind: oneOf(['log_summary']), event_time: utc, source_id: SRC,
    category: oneOf(['app', 'system', 'network', 'security']), severity: oneOf(SEVERITIES),
    count: int, redactions: int,
  },
};
const HEARTBEAT = {
  schema: oneOf([HB_SCHEMA]), collector_id: COL, sent_at: utc, version: match(/^\d+\.\d+\.\d+$/),
  cpu_pct: num, rss_mb: num, buffered: int, config_hash: match(/^[0-9a-f]{12}$/),
  policy_version: oneOf([POLICY_VERSION]), stream: oneOf(STREAMS),
};

function check(obj, shape, path) {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) return [`${path}: not an object`];
  const errs = [];
  // The unknown key's name is not echoed: it is untrusted text and could itself carry a secret.
  for (const k of Object.keys(obj)) if (!Object.hasOwn(shape, k)) errs.push(`${path}: unknown field rejected (not in allow-list)`);
  for (const [k, ok] of Object.entries(shape)) if (!ok(obj[k])) errs.push(`${path}.${k}: missing or wrong type`);
  return errs;
}

function validatePayload(p) {
  const errs = check(p, ENVELOPE, 'payload');
  if (errs.length) return errs;
  if (p.records.length < 1 || p.records.length > MAX_RECORDS) errs.push(`payload.records: need 1..${MAX_RECORDS}`);
  p.records.forEach((r, i) => {
    const shape = r && Object.hasOwn(RECORDS, r.kind) ? RECORDS[r.kind] : null;
    errs.push(...(shape ? check(r, shape, `records[${i}]`) : [`records[${i}].kind: not in allow-list`]));
  });
  return errs;
}
const validateHeartbeat = hb => check(hb, HEARTBEAT, 'heartbeat');

// Canonical form = keys sorted, no whitespace. These exact bytes are the HTTP body and what we hash.
function canonical(v) {
  if (Array.isArray(v)) return '[' + v.map(canonical).join(',') + ']';
  if (v && typeof v === 'object') return '{' + Object.keys(v).sort().map(k => JSON.stringify(k) + ':' + canonical(v[k])).join(',') + '}';
  return JSON.stringify(v);
}
const sha256 = data => crypto.createHash('sha256').update(data).digest('hex');
const pseudonym = (salt, prefix, name) => `${prefix}-` + crypto.createHmac('sha256', salt).update(String(name)).digest('hex').slice(0, 10);

function allowedFields(p) {
  const f = new Set(Object.keys(p).filter(k => k !== 'records'));
  for (const r of p.records) for (const k of Object.keys(r)) f.add(`records[].${k}`);
  return [...f].sort();
}

// Signal Passport: integrity + policy evidence for one payload. Never computed over raw data.
function buildPassport(p, body) {
  return {
    payload_id: p.payload_id, created_at: p.created_at, policy_version: p.policy_version,
    destination_region: p.region, allowed_fields: allowedFields(p), record_count: p.records.length,
    sha256: sha256(body),
  };
}

module.exports = {
  POLICY_VERSION, SCHEMA, HB_SCHEMA, METRICS, SEVERITIES, REGIONS, MAX_RECORDS, MAX_BODY,
  validatePayload, validateHeartbeat, canonical, sha256, pseudonym, buildPassport, allowedFields,
};
