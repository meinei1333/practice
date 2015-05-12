var EventName = require("../EventName");

var ReelMediator = function(target, dispatcher) {
  this.target = target;
  this.dispatcher = dispatcher;

  dispatcher.addEventListener(EventName.REEL_RESIZE, doResize.bind(this));
}

function doResize(){
  this.target.resize();
}

module.exports = ReelMediator;