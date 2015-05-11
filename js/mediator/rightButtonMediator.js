var mc;
var dis;

var rightButtonMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;
  this.initEvent();
}

rightButtonMediator.prototype.initEvent = function(){
  mc.on(eventName.BUTTON_CLICK, onButtonDown)
}

function onButtonDown()
{
  dis.dispatch(eventName.REEL_RESIZE);
}	

module.exports = rightButtonMediator;