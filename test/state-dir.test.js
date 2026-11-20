'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { STATE_DIR, statePath } = require('../shared/state-dir');

test('state paths remain under the configured local state root', () => {
  assert.equal(statePath('certs', 'ca.crt'), path.join(STATE_DIR, 'certs', 'ca.crt'));
  assert.throws(() => statePath('..', 'outside.txt'), /inside SP_STATE_DIR/);
});
