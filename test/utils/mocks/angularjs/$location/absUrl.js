// During the test the env variable is set to test
process.env.NODE_ENV = 'test';

// Require the dev-dependencies
const { assert } = require('chai');
const { utils } = require('../../../../..');

const { $location } = utils.mocks.angular;


// Our parent block
describe('Utils: mock $location absUrl', () => { // eslint-disable-line no-undef, max-lines-per-function

  it('happy path', () => { // eslint-disable-line no-undef
    $location.setAbsoluteURL('url');
    assert.equal($location.absUrl(), 'url');
  });


});
