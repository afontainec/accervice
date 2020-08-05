/* global describe, it, before, after */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const { alert } = require('../..');

const { assert } = chai;

let templog;

let logged;

// Our parent block
// eslint-disable-next-line max-lines-per-function
describe('alert.print', () => {

  before(() => {
    templog = console.log;
    console.log = (...args) => {
      logged = args;
    };
  });


  it('Happy path', (done) => {
    alert.print('1', '2');
    assert.deepEqual(logged, ['DEVELOPER ALERT:', '1', '2']);
    done();
  });

  after(() => {
    console.log = templog;
  });

});
