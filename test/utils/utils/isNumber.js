/* global it, describe */
// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const Utils = require('../../..').utils;

const { assert } = chai;


// eslint-disable-next-line max-lines-per-function
describe('Utils: isNumber', () => {


  it('is null', (done) => {
    const bool = Utils.isNumber(null);
    assert.isFalse(bool);
    done();
  });

  it('is text', (done) => {
    const bool = Utils.isNumber('text');
    assert.isFalse(bool);
    done();
  });

  it('is integer', (done) => {
    const bool = Utils.isNumber(1);
    assert.isTrue(bool);
    done();
  });

  it('is integer as text', (done) => {
    const bool = Utils.isNumber('1');
    assert.isTrue(bool);
    done();
  });

  it('is float', (done) => {
    const bool = Utils.isNumber(1.2);
    assert.isTrue(bool);
    done();
  });

  it('is float as text', (done) => {
    const bool = Utils.isNumber('1.2');
    assert.isTrue(bool);
    done();
  });

});
