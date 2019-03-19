// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');// eslint-disable-line
const Utils = require('../../').utils;

const assert = chai.assert; //eslint-disable-line


// Our parent block
describe('Array: remove element', () => { // eslint-disable-line


  it('remove existing element',  (done) => { // eslint-disable-line
    const array = ['a', 'b', 'c'];
    const element = 'b';
    const input = Utils.cloneJSON(array);
    const result = Utils.Array.removeElement(input, element);
    assert.isArray(result);
    assert.equal(result.length, array.length - 1);
    assert.equal(result.indexOf(element), -1);
    assert.equal(array[0], result[0]);
    assert.equal(array[2], result[1]);
    done();
  });

  it('remove duplicated element',  (done) => { // eslint-disable-line
    done('NOT IMPLEMENTED');
  });

  it('remove unexisiting element',  (done) => { // eslint-disable-line
    done('NOT IMPLEMENTED');
  });

  it('array is undefined',  (done) => { // eslint-disable-line
    done('NOT IMPLEMENTED');
  });

  it('element is undefined',  (done) => { // eslint-disable-line
    done('NOT IMPLEMENTED');
  });
});
