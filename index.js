function HologramPlugin(options) {
  this.hologram = require('node-hologram')(options);
}

HologramPlugin.prototype.apply = function(compiler) {
  var self = this;
  compiler.plugin('done', function() {
    self.hologram.init();
  });
};

module.exports = HologramPlugin;
