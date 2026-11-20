'use strict';
/**
 * Tests for the TEAM-SIMULATED stream label, new simulator scenarios,
 * and collector inject guard.
 * All in-process — no servers started, no files deleted.
 */
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const fs = require('node:fs');

const SIM = path.join(__dirname, '..', 'scripts', 'sim-stream.js');
const COL = path.join(__dirname, '..', 'collector', 'index.js');
const DOCK = path.join(__dirname, '..', 'web', 'src', 'components', 'FloatingDock.jsx');
const CC = path.join(__dirname, '..', 'web', 'src', 'components', 'CommandCenter.jsx');

// ── TEAM-SIMULATED label ───────────────────────────────────────────────────────
test('sim-stream.js is labelled TEAM-SIMULATED in its listen log', () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(src.includes('TEAM-SIMULATED'), 'sim-stream.js must include TEAM-SIMULATED label');
});

test('sim-stream.js binds to 127.0.0.1 only (loopback)', () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(src.includes("listen(PORT, '127.0.0.1'"), 'simulator must bind loopback only');
});

test('collector defaults to team-simulated stream kind', () => {
  const src = fs.readFileSync(COL, 'utf8');
  assert.ok(
    src.includes("'team-simulated'"),
    "collector STREAM_KIND must default to 'team-simulated'"
  );
  assert.ok(
    !src.match(/STREAM_KIND\s*=\s*process\.env\.STREAM_KIND.*?'\s*:\s*'simulated'/),
    "collector must not fall back to bare 'simulated' label"
  );
});

test('collector inject guard allows team-simulated kind', () => {
  const src = fs.readFileSync(COL, 'utf8');
  // Guard must allow both simulated and team-simulated, using the array form
  assert.ok(
    src.includes("'team-simulated'") && src.includes('/api/inject/'),
    "inject guard must reference team-simulated"
  );
  // Must use array include check, not a simple !== comparison that excludes team-simulated
  assert.ok(
    src.includes("['simulated', 'team-simulated'].includes(STREAM_KIND)") ||
    src.includes("includes(STREAM_KIND)"),
    "inject guard must use includes() to allow both simulated and team-simulated kinds"
  );
});

// ── New simulator scenarios ───────────────────────────────────────────────────
test("sim-stream.js supports 'late' scenario (backdated event)", () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(src.includes("name === 'late'"), "inject must handle 'late' scenario");
  assert.ok(src.includes('lateEventPending'), 'simulator must track lateEventPending flag');
  assert.ok(src.includes('45000'), 'late event must be backdated 45 s');
});

test("sim-stream.js supports 'duplicate' scenario (replay last event)", () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(src.includes("name === 'duplicate'"), "inject must handle 'duplicate' scenario");
  assert.ok(src.includes('dupBuffer'), 'simulator must buffer a recent event for replay');
});

test("sim-stream.js supports 'outage' scenario (source goes silent then recovers)", () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(src.includes("name === 'outage'"), "inject must handle 'outage' scenario");
  assert.ok(src.includes('silent: true'), 'outage scenario must set silent flag');
  assert.ok(src.includes('setTimeout'), 'outage scenario must schedule auto-recovery');
  assert.ok(src.includes('recovered'), "outage scenario must emit recovery log line");
});

test('sim-stream.js uses only TEST-NET-3 IPs (203.0.113.x) for synthetic auth events', () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(
    src.includes('203.0.113.'),
    'bruteforce IPs must use TEST-NET-3 documentation range'
  );
  // Must not use real-looking RFC-1918 ranges in auth events
  assert.ok(
    !src.match(/src_ip.*192\.168\.\d+\.\d+.*outcome.*failure/s),
    'synthetic auth failure events must not use RFC-1918 IPs'
  );
});

test('sim-stream.js clear scenario also resets lateEventPending', () => {
  const src = fs.readFileSync(SIM, 'utf8');
  const clearBlock = src.slice(src.indexOf("name === 'clear'"), src.indexOf("name === 'clear'") + 200);
  assert.ok(clearBlock.includes('lateEventPending'), "clear must reset lateEventPending");
});

// ── UI badge labelling ────────────────────────────────────────────────────────
test('CommandCenter badge says TEAM-SIMULATED for non-organizer streams', () => {
  const src = fs.readFileSync(CC, 'utf8');
  assert.ok(src.includes('TEAM-SIMULATED'), 'CommandCenter badge must show TEAM-SIMULATED');
  assert.ok(
    !src.includes("SIMULATED\n              </span>"),
    'Plain SIMULATED badge must be replaced with TEAM-SIMULATED'
  );
});

test('FloatingDock dock label shows TEAM-SIMULATED fault injection', () => {
  const src = fs.readFileSync(DOCK, 'utf8');
  assert.ok(
    src.includes('TEAM-SIMULATED fault injection'),
    'FloatingDock label must show TEAM-SIMULATED fault injection'
  );
});

test('FloatingDock includes late-event scenario button', () => {
  const src = fs.readFileSync(DOCK, 'utf8');
  assert.ok(src.includes("'late'"), "FloatingDock must have a 'late' scenario action");
});

test('FloatingDock includes duplicate-replay scenario button', () => {
  const src = fs.readFileSync(DOCK, 'utf8');
  assert.ok(src.includes("'duplicate'"), "FloatingDock must have a 'duplicate' scenario action");
});

test('FloatingDock includes source-outage scenario button', () => {
  const src = fs.readFileSync(DOCK, 'utf8');
  assert.ok(src.includes("'outage'"), "FloatingDock must have a source 'outage' scenario action");
});

// ── No organizer claims ───────────────────────────────────────────────────────
test('sim-stream.js does not claim to be the organizer stream', () => {
  const src = fs.readFileSync(SIM, 'utf8');
  assert.ok(
    src.includes('not organizer evidence'),
    'simulator must disclaim organizer status in its log line'
  );
  assert.ok(
    !src.includes("kind: 'organizer'"),
    'simulator must never label its events as organizer'
  );
});
