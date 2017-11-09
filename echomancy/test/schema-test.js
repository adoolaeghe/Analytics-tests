var assert = require('assert');
var chai = require('chai')
describe('Schema', function() {
  it('initialise with an array with one layer', function() {
    var schema = new Schema();
    expect(schema.layers().first()).to.be.an('object');
  });
});
