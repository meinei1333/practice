var dis;
var mc;

var reelMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;

  dispatcher.addEventListener(eventName.REEL_RESIZE, function(event) {
    mc.resize();
  })
}

module.exports = reelMediator;