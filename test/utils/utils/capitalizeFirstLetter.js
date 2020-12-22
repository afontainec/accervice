/* global describe, it */
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const Utils = require('../../..').utils;


// Our parent block
describe('Utils: capitalizeFirst Char', () => { // eslint-disable-line max-lines-per-function


  it('one character', (done) => {
    const result = Utils.capitalizeFirstLetter('a');
    assert.equal(result, 'A');
    done();
  });

  it('happy path', (done) => {
    const result = Utils.capitalizeFirstLetter('antonio');
    assert.equal(result, 'Antonio');
    done();
  });

  it('not a string', (done) => {
    const result = Utils.capitalizeFirstLetter(10);
    assert.equal(result, 10);
    done();
  });

  it('already capitalized', (done) => {
    const result = Utils.capitalizeFirstLetter('AAA');
    assert.equal(result, 'AAA');
    done();
  });
});
