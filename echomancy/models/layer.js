var Share = require('./share.js')

function Layer(shares) {
  this.shares = [];
  this.sharesAvailable = shares
  for (i = 0; i < shares; i++) {
    this.generateShare()
  };
};

Layer.prototype.generateShare = function() {
  share = new Share
  this.shares.push(share)
};

Layer.prototype.buyShare = function() {
  this.shares[this.sharesAvailable - 1].buy()
  this.sharesAvailable -= 1
}

module.exports = Layer
