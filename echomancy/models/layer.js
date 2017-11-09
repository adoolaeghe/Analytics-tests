var Share = require('./share.js')

function Layer(shares) {
  this.shares = []
  for (i = 0; i < shares; i++) {
    this.generateShare()
  };
};

Layer.prototype.generateShare = function() {
  share = new Share
  this.shares.push(share)
};

module.exports = Layer
