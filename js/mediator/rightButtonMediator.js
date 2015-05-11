var mc;
var dis;

var rightButtonMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;
  this.initEvent();
}

rightButtonMediator.prototype.initEvent = function(){
  mc.on(eventName.buttonClick, onButtonDown)
}

function onButtonDown()
{
  dis.dispatch(eventName.reelResize);
}	

module.exports = rightButtonMediator;