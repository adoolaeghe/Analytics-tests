var Share = require('./share.js')

function Layer(shares, price) {
  this.shares = [];
  this.sharesAvailable = shares
  for (i = 0; i < shares; i++) {
    this.generateShare(price)
  };
};

Layer.prototype.generateShare = function(price) {
  share = new Share()
  this.shares.push(share)
};

Layer.prototype.buyShare = function() {
  this.shares[this.sharesAvailable - 1].buy()
  this.sharesAvailable -= 1
}

module.exports = Layer
