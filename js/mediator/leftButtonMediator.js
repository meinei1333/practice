var mc;
var dis;
var leftButtonMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;
  this.initEvent();
}

leftButtonMediator.prototype.initEvent = function(){
  mc.on(eventName.BUTTON_CLICK, onButtonDown)
}

function onButtonDown()
{
  dis.dispatch(eventName.REEL_RESIZE);
}	

module.exports = leftButtonMediator;