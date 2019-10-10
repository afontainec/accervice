// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { httpResponse } = require('../../');

const { assert } = chai;


// Our parent block
describe('Http Response: Error', () => { // eslint-disable-line


  it('code is 500, not include err',  (done) => { // eslint-disable-line
    const result = httpResponse.cloneJSON('test', 'full msg', 500);
    const expected = {
      err: 'Internal Server Error',
      fullError: 'full msg',
    };
    assert.deepEqual(result, expected);
    done();
  });

  it('code is not 500, include err',  (done) => { // eslint-disable-line
    const result = httpResponse.cloneJSON('test', 'full msg');
    const expected = {
      err: 'test',
      fullError: 'full msg',
    };
    assert.deepEqual(result, expected);
    done();
  });

  it('in production do not include full error',  (done) => { // eslint-disable-line
    process.env.NODE_ENV = 'production';
    const result = httpResponse.cloneJSON('test', 'full msg');
    const expected = {
      err: 'test',
    };
    assert.deepEqual(result, expected);
    done();
  });
});
