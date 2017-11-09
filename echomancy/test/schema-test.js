var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var Schema = require('../models/schema')

describe('Schema', function() {
  it('initialise with an array with one layer', function() {
    var schema = new Schema();
    expect(schema.layers[0]).to.be.an('object');
  });

  it('create a new layer when there is no available share in the current layer', function() {
    var schema = new Schema();
    schema.buy();
    expect(schema.layers[0].shares[schema.layers[0].shares.length - 1].owned).to.be.true
  })
});
