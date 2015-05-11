var dis;
var mc;

var reelMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;

  dispatcher.addEventListener(eventName.reelResize, function(event) {
    mc.resize();
  })
}

module.exports = reelMediator;