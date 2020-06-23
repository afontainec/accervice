// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const chai = require('chai');
const { utils } = require('../../../..');

const Res = utils.mocks.express.res;

const res = Res.generate();

const { assert } = chai;

// Our parent block
describe('Utils: mock res render', () => { // eslint-disable-line no-undef, max-lines-per-function
  it('happy path', (done) => { // eslint-disable-line no-undef
    res.render('path', 'attr');
    assert.equal(res.renderingPath, 'path');
    assert.equal(res.renderingAttr, 'attr');
    done();
  });
});
