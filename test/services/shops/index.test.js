'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('shops service', function() {
  it('registered the shops service', () => {
    assert.ok(app.service('shops'));
  });
});
