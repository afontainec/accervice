// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../..').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Utils: waitUntil', () => { // eslint-disable-line


  it('happens',  async () => { // eslint-disable-line
    let called = false;
    const f = async () => {
      const result = called ? 'a' : 'b';
      called = true;
      return result;
    };
    await Utils.waitUntil(f, [], 'a');
  });

  it('do not happens', (done) => { // eslint-disable-line
    let called = false;
    const f = async () => {
      const result = called ? 'a' : 'b';
      called = true;
      return result;
    };
    Utils.WAIT_UNTIL.REST_TIME = 1;
    Utils.WAIT_UNTIL.MAX_TRIES = 2;
    Utils.waitUntil(f, [], 'c').then(() => {
      done(new Error('should not get here'));
    }).catch((err) => {
      console.log(err.message);
      assert.equal(err.message, 'wait until, did not happen:  | endValue=c');
      done();
    });
  });
});
