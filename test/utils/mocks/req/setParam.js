// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const req = utils.mocks.express.req.generate();

const { assert } = chai;
const user = {
  user_id: 1,
};

// Our parent block
describe('Utils: req.setParams', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('params is undef, set anyways', (done) => { // eslint-disable-line no-undef
    assert.isUndefined(req.params);
    req.setParam('key', 'value');
    assert.deepEqual(req.params, { key: 'value' });
    done();
  });

  it('params is defined', (done) => { // eslint-disable-line no-undef
    assert.isDefined(req.params);
    req.setParam('key2', 'value');
    assert.deepEqual(req.params, { key: 'value', key2: 'value' });
    done();
  });

});
