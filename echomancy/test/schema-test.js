var assert = require("assert");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);
var Schema = require("../models/schema");

describe("Schema", function() {
  it("initialise with an array with one layer", function() {
    var layerObj = { shares: [], sharesAvailable: 4 };
    var layer = sinon.mock(layerObj);
    var schema = new Schema(layer);
    expect(schema.layers[0]).to.be.an("object");
  });

  it("buys a share when share is available", function() {
    var schema = new Schema();
    schema.buy();
    expect(schema.layers[0].shares[schema.layers[0].shares.length - 1].owned).to
      .be.true;
  });

  it("creates a new layer when there is no available share in the current layer", function() {
    var schema = new Schema();
    for (i = 0; i < 4; i++) {
      schema.buy();
    }
    expect(schema.layers.length).to.equal(2);
  });
});
