var Layer = require("./layer.js");

function Schema(price, incrementRate) {
  this.currentPrice = price
  this.incrementRate = incrementRate
  this.layers = [new Layer(4, 1)];
}

Schema.prototype.buy = function() {
  this.layers[this.layers.length - 1].buyShare();
  if (this.layers[this.layers.length - 1].checkLayerFull) {
    this.layers.push(new Layer(4, this.currentPrice));
    this.currentPrice = this.layers.length * this.incrementRate
  }
};



module.exports = Schema;
