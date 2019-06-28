// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const Utils = require('../../../../').utils;

const assert = chai.assert;


// Our parent block
describe('Utils: req.render', () => { // eslint-disable-line no-undef
  it('its not of type json', (done) => { // eslint-disable-line no-undef
    const test = false;
    const copy = Utils.cloneJSON(test);
    assert.equal(copy, test);
    done();
  });

  it('its undefined', (done) => { // eslint-disable-line no-undef
    const copy = Utils.cloneJSON();
    assert.equal(copy, undefined);
    done();
  });

  it('its copied', (done) => { // eslint-disable-line no-undef
    const test = { a: 'b' };
    const copy = Utils.cloneJSON(test);
    assert.deepEqual(copy, test);
    test.a = 'c';
    assert.equal(copy.a, 'b');
    done();
  });
});
