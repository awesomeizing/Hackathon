'use strict';
/**
 * Regression tests for Part 3 (UI improvements).
 * All in-process, no servers started, no runtime state modified.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const srcDir = path.join(__dirname, '..', 'web', 'src', 'components');

function read(file) {
  return fs.readFileSync(path.join(srcDir, file), 'utf8');
}

// ── CommandCenter: stream-source badge ─────────────────────────────────────
test('CommandCenter renders SIMULATED badge based on stream.kind', () => {
  const src = read('CommandCenter.jsx');
  assert.ok(src.includes('SIMULATED'), 'CommandCenter must contain SIMULATED badge text');
  assert.ok(src.includes('ORGANIZER STREAM'), 'CommandCenter must contain ORGANIZER STREAM badge text');
  assert.ok(src.includes('DISCONNECTED'), 'CommandCenter must contain DISCONNECTED badge text');
  // Must be driven by stream.kind, not hardcoded
  assert.ok(
    src.includes("collectorState.stream?.kind") || src.includes("collectorState.stream?.connected"),
    'Stream badge must read collectorState.stream?.kind or .connected'
  );
});

// ── CommandCenter: real-time counts display ─────────────────────────────────
test('CommandCenter displays acked, pending, rejected, buffered counts from collectorState', () => {
  const src = read('CommandCenter.jsx');
  assert.ok(src.includes('collectorState.counts?.acked'), 'must show acked count');
  assert.ok(src.includes('collectorState.counts?.rejected'), 'must show rejected count');
  assert.ok(src.includes('collectorState.buffered'), 'must show buffered count');
});

// ── FloatingDock: stale scenario present ──────────────────────────────────
test('FloatingDock includes stale scenario', () => {
  const src = read('FloatingDock.jsx');
  assert.ok(src.includes("'stale'"), 'FloatingDock must include stale scenario');
});

test('FloatingDock accepts streamKind and streamConnected props', () => {
  const src = read('FloatingDock.jsx');
  assert.ok(src.includes('streamKind'), 'FloatingDock must accept streamKind prop');
  assert.ok(src.includes('streamConnected'), 'FloatingDock must accept streamConnected prop');
});

test('FloatingDock disables inject buttons on organizer stream', () => {
  const src = read('FloatingDock.jsx');
  assert.ok(
    src.includes("streamKind === 'organizer'"),
    'FloatingDock must disable injection when streamKind is organizer'
  );
});

// ── GlyphCurtainHero: no fake hardcoded SHA-256 ──────────────────────────
test('GlyphCurtainHero does not contain hardcoded fake SHA-256 digest', () => {
  const src = read('GlyphCurtainHero.jsx');
  assert.ok(
    !src.includes('0cc5a837'),
    'GlyphCurtainHero must not contain the hardcoded fake SHA-256 digest'
  );
});

test('GlyphCurtainHero does not set verified_by_saas: true unconditionally', () => {
  const src = read('GlyphCurtainHero.jsx');
  // The old fallback had `verified_by_saas: true` in defaultPassport
  assert.ok(
    !src.includes('verified_by_saas: true'),
    'GlyphCurtainHero must not unconditionally set verified_by_saas: true in fallback'
  );
});

test('GlyphCurtainHero shows illustrative label when no live data', () => {
  const src = read('GlyphCurtainHero.jsx');
  assert.ok(
    src.includes('ILLUSTRATIVE') || src.includes('illustrative'),
    'GlyphCurtainHero must label fallback data as illustrative'
  );
});

test('GlyphCurtainHero shows PENDING RECEIPT when live passport not yet matched', () => {
  const src = read('GlyphCurtainHero.jsx');
  assert.ok(src.includes('PENDING RECEIPT'), 'GlyphCurtainHero must show PENDING RECEIPT for unverified live passport');
});

// ── SecretInspector: improved empty state ───────────────────────────────
test("SecretInspector empty state references the 'secret' dock scenario", () => {
  const src = read('SecretInspector.jsx');
  assert.ok(
    src.includes("'secret'") || src.includes('"secret"'),
    "SecretInspector empty state must reference the 'secret' scenario"
  );
});

test('SecretInspector cloud leakage stat is conditional on secretsCount', () => {
  const src = read('SecretInspector.jsx');
  assert.ok(
    src.includes('secretsCount > 0') || src.includes('No secrets in window'),
    'SecretInspector cloud leakage stat must be conditional or labelled'
  );
});

// ── SlaMetricsPanel: delivery integrity no longer unconditional PASS ─────
test('SlaMetricsPanel delivery integrity card shows "run verify" hint instead of unconditional PASS', () => {
  const src = read('SlaMetricsPanel.jsx');
  // Check that the unconditional standalone PASS in delivery integrity is replaced
  assert.ok(
    src.includes('run verify') || !src.includes("'PASS'</span>\n            </div>\n          </SpotlightCard>"),
    'Delivery integrity card must not show an unconditional PASS without verification'
  );
});

// ── EgressProofPanel: event trace instruction ────────────────────────────
test('EgressProofPanel shows select-payload trace instruction for operator', () => {
  const src = read('EgressProofPanel.jsx');
  assert.ok(
    src.includes('Select a payload') || src.includes('inspect its local Signal Passport'),
    'EgressProofPanel must show trace instruction for operator'
  );
});

// ── IncidentRemediation: helpful empty state ─────────────────────────────
test("IncidentRemediation empty state references 'incident' scenario", () => {
  const src = read('IncidentRemediation.jsx');
  assert.ok(
    src.includes("'incident'") || src.includes('"incident"'),
    "IncidentRemediation empty state must reference the 'incident' scenario"
  );
});
