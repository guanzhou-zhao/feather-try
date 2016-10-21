'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('coffees service', function() {
  it('registered the coffees service', () => {
    app.service('coffees').find().then(t => {console.log(t);});
    assert.ok(app.service('coffees'));
  });
});
