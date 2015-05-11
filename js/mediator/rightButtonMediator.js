var mc;
var dis;

var RightButtonMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;
  this.initEvent();
}

RightButtonMediator.prototype.initEvent = function(){
  mc.on(EventName.BUTTON_CLICK, onButtonDown)
}

function onButtonDown()
{
  dis.dispatch(EventName.REEL_RESIZE);
}	

module.exports = RightButtonMediator;