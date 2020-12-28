/* global describe, it */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const Utils = require('../../..').utils;

const { assert } = chai;


// Our parent block
describe('Promise: doAll', () => { // eslint-disable-line max-lines-per-function


  it('No error present', async () => {
    const promises = [
      new Promise((resolve) => { return resolve(); }),
      new Promise((resolve) => { return resolve(); }),
    ];
    const result = await Utils.Promise.doAll(promises);
    assert.isFalse(Utils.Promise.hasErrors(result));
  });

  it('error present', async () => {
    const promises = [
      new Promise((resolve) => { return resolve(); }),
      new Promise((resolve, reject) => { return reject(new Error()); }),
    ];
    const result = await Utils.Promise.doAll(promises);
    assert.isTrue(Utils.Promise.hasErrors(result));
  });

  it('promises is not defined', async () => {
    assert.isFalse(Utils.Promise.hasErrors(null));
  });

  it('promises.errors is not defined', async () => {
    assert.isFalse(Utils.Promise.hasErrors([]));
  });
});
