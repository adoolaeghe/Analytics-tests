var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var Share = require('../models/share')
describe('Share', function() {
  it('initialise with a given price', function() {
    var share = new Share(1)
    expect(share.price).to.equal(1);
  });
});
