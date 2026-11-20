'use strict';
/**
 * VeilOps v2.4.0 Single Command Launcher
 * Starts Tier 1 Local Collector + Tier 2 Multi-Tenant SaaS + Telemetry Simulator.
 */

const { spawn, execFileSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
// Do NOT override SP_STATE_DIR with a relative path.
// Use the shared/state-dir default (platform-aware absolute path) so that
// setup, SaaS, and collector all resolve the same directory regardless of cwd.
const env = { ...process.env };
// SP_STATE_DIR is intentionally left unset here so the platform-aware default
// in shared/state-dir.js is used. Setting it to a relative path would break
// any process whose cwd differs from ROOT.

console.log('======================================================================');
console.log(' VeilOps v2.4.0: Zero-Trust Local-First AIOps Observability ');
console.log(' Starting End-to-End System (Simulator + Tier 1 Collector + Tier 2 SaaS)');
console.log('======================================================================');

// Ensure setup exists: resolve STATE_DIR the same way shared/state-dir does.
const { STATE_DIR } = require('./shared/state-dir');
const certPath = path.join(STATE_DIR, 'certs', 'ca.crt');
if (!fs.existsSync(certPath)) {
  console.log('[VeilOps] Initializing cryptographic certificates and tenant stores...');
  execFileSync(process.execPath, [path.join(ROOT, 'scripts', 'setup.js')], {
    cwd: ROOT,
    env,
    stdio: 'inherit',
  });
}

const processes = [];

function launch(name, script, scriptArgs = [], extraEnv = {}) {
  const p = spawn(process.execPath, [path.join(ROOT, script), ...scriptArgs], {
    cwd: ROOT,
    env: { ...env, ...extraEnv },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  p.stdout.on('data', d => {
    const lines = d.toString().trim().split('\n');
    for (const line of lines) {
      if (line.trim()) console.log(`[${name}] ${line.trim()}`);
    }
  });

  p.stderr.on('data', d => {
    const lines = d.toString().trim().split('\n');
    for (const line of lines) {
      if (line.trim()) console.error(`[${name}:err] ${line.trim()}`);
    }
  });

  p.on('exit', code => {
    console.log(`[${name}] exited with code ${code}`);
  });

  processes.push({ name, proc: p });
  return p;
}

// 1. Launch Telemetry Simulator on port 7200
console.log('\n[1/3] Launching Telemetry Stream Simulator (Port 7200)...');
launch('Simulator', 'scripts/sim-stream.js', ['7200']);

// 2. Launch Tier 2 Regional SaaS Backend (HTTP 8080 / HTTPS 8443)
setTimeout(() => {
  console.log('\n[2/3] Launching Tier 2 Regional SaaS Backend & Command Center (Port 8080)...');
  launch('SaaS-Cloud', 'saas/server.js', [], {
    PORT: '8443',
    DASHBOARD_HTTP_PORT: '8080',
    REGION: 'ap-south',
  });
}, 500);

// 3. Launch Tier 1 Local Collector (Port 7100)
setTimeout(() => {
  console.log('\n[3/3] Launching Tier 1 Local Collector Agent (Port 7100)...');
  launch('Collector', 'collector/index.js', [], {
    COLLECTOR: 'acme-site-1',
    STREAM_URL: 'http://127.0.0.1:7200/stream',
    UI_PORT: '7100',
  });

  setTimeout(() => {
    console.log('\n======================================================================');
    console.log(' VeilOps v2.4.0 Live Stack Ready:');
    console.log(' Command Center:      http://127.0.0.1:8080');
    console.log(' Collector Agent:     http://127.0.0.1:7100');
    console.log(' Stream Simulator:    http://127.0.0.1:7200/stream');
    console.log(' Verification Suite:  npm run verify:rubric');
    console.log('======================================================================\n');
  }, 1200);
}, 1000);

process.on('SIGINT', () => {
  console.log('\nStopping VeilOps processes...');
  for (const { proc } of processes) {
    try { proc.kill(); } catch {}
  }
  process.exit(0);
});
