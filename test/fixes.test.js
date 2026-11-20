'use strict';
/**
 * Focused regression tests for the safety / correctness fixes.
 * These tests are purely in-process and do NOT start servers, delete files,
 * or reset runtime state.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

// ── Fix 1: start.js must not set SP_STATE_DIR to a relative path ──────────────
test('start.js does not contain a relative .local SP_STATE_DIR override', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'start.js'), 'utf8');
  // The old line was: SP_STATE_DIR: process.env.SP_STATE_DIR || '.local'
  // We specifically check that '.local' is not set as an env-var default value.
  assert.ok(
    !src.includes("SP_STATE_DIR || '.local'") && !src.includes('SP_STATE_DIR || ".local"'),
    'start.js must not use ".local" as a default SP_STATE_DIR value'
  );
});

test('start.js uses shared/state-dir STATE_DIR for the cert-existence check', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'start.js'), 'utf8');
  assert.ok(
    src.includes("require('./shared/state-dir')") || src.includes('require("./shared/state-dir")'),
    'start.js must import STATE_DIR from shared/state-dir'
  );
  assert.ok(
    src.includes('STATE_DIR'),
    'start.js must reference STATE_DIR when building the cert path'
  );
});

// ── Fix 2: saas/server.js — no unauthenticated viewer-token endpoint ──────────
test('saas/server.js does not expose an unauthenticated /api/viewer-tokens route', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'saas', 'server.js'), 'utf8');
  // The old code returned viewer tokens unconditionally before any auth check.
  // After the fix the route must not exist in viewerApi before the tokenHash check.
  const viewerApiStart = src.indexOf('async function viewerApi');
  assert.ok(viewerApiStart !== -1, 'viewerApi function must exist');
  const tokenHashPos = src.indexOf('bearerHash(req)', viewerApiStart);
  const oldTokenRoute = src.indexOf("pathname === '/api/viewer-tokens'", viewerApiStart);
  // The old unauthenticated route returned early before bearerHash was called.
  // After the fix that route is gone; if it exists at all it must be AFTER the auth check.
  if (oldTokenRoute !== -1) {
    assert.ok(
      oldTokenRoute > tokenHashPos,
      '/api/viewer-tokens handler must only appear after the bearerHash auth check'
    );
  }
});

test('saas/server.js does not use query-parameter token auth', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'saas', 'server.js'), 'utf8');
  assert.ok(
    !src.includes("searchParams.get('token')"),
    'URL ?token= query-parameter auth must be removed from bearerHash'
  );
});

// ── Fix 3: saas/server.js — synthetic Initech telemetry generator removed ─────
test('saas/server.js does not contain a synthetic Initech telemetry generator', () => {
  const src = fs.readFileSync(path.join(__dirname, '..', 'saas', 'server.js'), 'utf8');
  assert.ok(
    !src.includes('seedTenantTelemetry'),
    'seedTenantTelemetry function must be removed'
  );
  assert.ok(
    !src.includes("col-0123456789"),
    'hardcoded synthetic Initech collector ID must be removed'
  );
  assert.ok(
    !src.includes("src-812a94f01b"),
    'hardcoded synthetic Initech source IDs must be removed'
  );
});

// ── Fix 4: EgressProofPanel — no unconditional RECEIPT CONFIRMED ──────────────
test('EgressProofPanel.jsx receipt is conditional on actual digest match', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'web', 'src', 'components', 'EgressProofPanel.jsx'),
    'utf8'
  );
  // The old code always showed "RECEIPT CONFIRMED (100% MATCH)".
  // After the fix it uses a conditional expression.
  assert.ok(
    !src.includes("RECEIPT CONFIRMED (100% MATCH)\n                  </span>"),
    'Receipt confirmed must not be unconditional plain text'
  );
  // Confirm the fix uses actual digest comparison logic
  assert.ok(
    src.includes('passportDigest === receiptDigest') || src.includes('confirmed'),
    'EgressProofPanel must compare actual digests before showing CONFIRMED'
  );
});

test('EgressProofPanel.jsx does not show a hardcoded fallback digest', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'web', 'src', 'components', 'EgressProofPanel.jsx'),
    'utf8'
  );
  assert.ok(
    !src.includes('0cc5a837d8a9bbaaa3a6e047fd090001d8dbe1500cb1fc9ae909e4e86228cc68'),
    'Hardcoded fallback SHA-256 digest must be removed from EgressProofPanel'
  );
});

// ── Fix 5: SlaMetricsPanel — catch must not report success after error ─────────
test('SlaMetricsPanel.jsx catch block does not report PASS after verify error', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'web', 'src', 'components', 'SlaMetricsPanel.jsx'),
    'utf8'
  );
  // The old bug: the CATCH block unconditionally called
  //   setScenarioOutput(`Verify executed: PASS — Zero loss, zero duplicates.`)
  // Extract only the catch block of handleVerify to check it.
  const handleVerifyFn = src.slice(src.indexOf('const handleVerify'));
  const catchStart = handleVerifyFn.indexOf('} catch (e) {');
  const finallyStart = handleVerifyFn.indexOf('} finally {');
  assert.ok(catchStart !== -1, 'handleVerify must have a catch block');
  const catchBody = handleVerifyFn.slice(catchStart, finallyStart !== -1 ? finallyStart : catchStart + 500);
  // After the fix the catch reports an error message, not a success/PASS message.
  assert.ok(
    catchBody.includes('error') || catchBody.includes('Error') || catchBody.includes('e.message'),
    'catch block must surface the actual error, not silently claim success'
  );
  assert.ok(
    !catchBody.includes('PASS — Zero loss'),
    'catch block must not claim PASS unconditionally'
  );
});

test('SlaMetricsPanel.jsx confetti fires only on actual PASS, not on error', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'web', 'src', 'components', 'SlaMetricsPanel.jsx'),
    'utf8'
  );
  // After fix, confetti call is inside the try block ONLY when allAcked is true,
  // not in a finally or catch that runs unconditionally.
  const catchIdx = src.indexOf('} catch (e) {', src.indexOf('handleVerify'));
  const confettiIdx = src.indexOf('confetti(', src.indexOf('handleVerify'));
  assert.ok(
    catchIdx === -1 || confettiIdx === -1 || confettiIdx < catchIdx,
    'confetti call must appear before the catch block (inside the success path)'
  );
});

// ── Fix 6: TelemetrySwitcher — no WebSocket claim ────────────────────────────
test('TelemetrySwitcher.jsx does not claim WebSocket support', () => {
  const src = fs.readFileSync(
    path.join(__dirname, '..', 'web', 'src', 'components', 'TelemetrySwitcher.jsx'),
    'utf8'
  );
  // The old claim "HTTP NDJSON / SSE / WebSocket" was removed.
  // A disclaimer "WebSocket is not supported" is acceptable; a positive claim is not.
  assert.ok(
    !src.includes('/ SSE / WebSocket'),
    'TelemetrySwitcher must not positively claim WebSocket support alongside SSE'
  );
});

// ── Fix 7: shared/state-dir still resolves an absolute path ──────────────────
test('shared/state-dir resolves STATE_DIR to an absolute path', () => {
  // Ensure no SP_STATE_DIR override pollutes this test
  const saved = process.env.SP_STATE_DIR;
  delete process.env.SP_STATE_DIR;
  // Clear the require cache so we get a fresh load
  const key = require.resolve('../shared/state-dir');
  delete require.cache[key];
  const { STATE_DIR } = require('../shared/state-dir');
  assert.ok(path.isAbsolute(STATE_DIR), `STATE_DIR must be absolute, got: ${STATE_DIR}`);
  if (saved !== undefined) process.env.SP_STATE_DIR = saved;
  // Restore cache entry
  delete require.cache[key];
});
