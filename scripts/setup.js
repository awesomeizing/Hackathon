'use strict';
// One-time local setup: demo CA + SaaS TLS cert, tenant registry (hashes only), collector credentials.
// Runtime state lands outside the source tree by default. Re-run with --force to rotate all of it.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const { sha256 } = require('../shared/policy');
const { STATE_DIR, statePath, ensureStateDir } = require('../shared/state-dir');

process.umask(0o077);
ensureStateDir();
const L = STATE_DIR;
const force = process.argv.includes('--force');
if (fs.existsSync(statePath('tenants.json')) && !force) { console.log(`Already set up in ${L} (use --force to rotate)`); process.exit(0); }
fs.mkdirSync(statePath('certs'), { recursive: true, mode: 0o700 });
fs.mkdirSync(statePath('collectors'), { recursive: true, mode: 0o700 });

const OPENSSL = ['openssl', 'C:\\Program Files\\Git\\usr\\bin\\openssl.exe', 'C:\\Program Files\\Git\\mingw64\\bin\\openssl.exe']
  .find(c => { try { execFileSync(c, ['version'], { stdio: 'ignore' }); return true; } catch { return false; } });
if (!OPENSSL) { console.error('openssl not found (install Git for Windows or OpenSSL)'); process.exit(1); }
const c = f => path.join(L, 'certs', f);
const ssl = args => execFileSync(OPENSSL, args, { stdio: ['ignore', 'ignore', 'inherit'] });
ssl(['req', '-x509', '-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes', '-days', '7',
  '-keyout', c('ca.key'), '-out', c('ca.crt'), '-subj', '/CN=Signal Passport Demo CA']);
ssl(['req', '-newkey', 'ec', '-pkeyopt', 'ec_paramgen_curve:prime256v1', '-nodes',
  '-keyout', c('server.key'), '-out', c('server.csr'), '-subj', '/CN=localhost']);
fs.writeFileSync(c('server.ext'), 'subjectAltName=DNS:localhost,IP:127.0.0.1\nextendedKeyUsage=serverAuth\n');
ssl(['x509', '-req', '-in', c('server.csr'), '-CA', c('ca.crt'), '-CAkey', c('ca.key'), '-CAcreateserial',
  '-days', '7', '-out', c('server.crt'), '-extfile', c('server.ext')]);

const secret = () => crypto.randomBytes(32).toString('base64url');
// acme + initech live in ap-south; globex is homed in eu-west to demonstrate residency rejection.
const TENANTS = [
  { id: 'acme', name: 'Acme Retail', home_region: 'ap-south', collectors: [{ name: 'acme-site-1', ui_port: 7100 }] },
  { id: 'initech', name: 'Initech Bank', home_region: 'ap-south', collectors: [{ name: 'initech-site-1', ui_port: 7101 }] },
  { id: 'globex', name: 'Globex EU', home_region: 'eu-west', collectors: [{ name: 'globex-site-1', ui_port: 7102 }] },
];
const viewers = {};
const registry = { tenants: [] };
for (const t of TENANTS) {
  const viewer = secret();
  viewers[t.id] = viewer;
  const keys = [];
  for (const col of t.collectors) {
    const key = secret();
    keys.push(sha256(key));
    fs.writeFileSync(path.join(L, 'collectors', `${col.name}.json`), JSON.stringify({
      name: col.name, key, region: t.home_region, saas_url: 'https://localhost:8443', ui_port: col.ui_port, tz: 'Asia/Kolkata',
    }, null, 2), { mode: 0o600 });
  }
  registry.tenants.push({ id: t.id, name: t.name, home_region: t.home_region, viewer_token_sha256: sha256(viewer), collector_key_sha256: keys });
}
fs.writeFileSync(path.join(L, 'tenants.json'), JSON.stringify(registry, null, 2), { mode: 0o600 });
fs.writeFileSync(path.join(L, 'viewer-tokens.json'), JSON.stringify(viewers, null, 2), { mode: 0o600 });
console.log(`Setup done. Demo CA, SaaS cert, 3 tenants, 3 collectors in ${L}.`);
console.log(`Dashboard viewer tokens are in ${statePath('viewer-tokens.json')} (local only).`);
