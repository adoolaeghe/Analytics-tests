var Layer = require('./layer.js')

function Schema() {
  this.layers = [new Layer(4, 1)];
};

Schema.prototype.buy = function() {
  console.log(this.layers[this.layers.length - 1])
  this.layers[this.layers.length - 1].buyShare()
}

module.exports = Schema
