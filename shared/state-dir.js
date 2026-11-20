'use strict';
// Keep credentials, certificates, raw telemetry, and databases out of synced source folders.
const os = require('node:os');
const path = require('node:path');
const fs = require('node:fs');

function defaultStateDir() {
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return path.join(process.env.LOCALAPPDATA, 'SignalPassport', 'CICADA');
  }
  if (process.env.XDG_STATE_HOME) return path.join(process.env.XDG_STATE_HOME, 'signal-passport', 'cicada');
  return path.join(os.homedir(), '.local', 'state', 'signal-passport', 'cicada');
}

const STATE_DIR = path.resolve(process.env.SP_STATE_DIR || defaultStateDir());
function statePath(...parts) {
  const target = path.resolve(STATE_DIR, ...parts);
  const relative = path.relative(STATE_DIR, target);
  if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
    throw new Error('state path must remain inside SP_STATE_DIR');
  }
  return target;
}

function ensureStateDir() {
  fs.mkdirSync(STATE_DIR, { recursive: true, mode: 0o700 });
  if (process.platform !== 'win32') fs.chmodSync(STATE_DIR, 0o700);
}

module.exports = { STATE_DIR, statePath, ensureStateDir };
