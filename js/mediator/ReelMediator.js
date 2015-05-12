var EventName = require("../EventName");

var dis;
var mc;

var ReelMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;

  dispatcher.addEventListener(EventName.REEL_RESIZE, function(event) {
    mc.resize();
  })
}

module.exports = ReelMediator;