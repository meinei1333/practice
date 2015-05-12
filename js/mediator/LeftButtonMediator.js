var EventName = require("../EventName");
var mc;
var dis;
var LeftButtonMediator = function(target, dispatcher) {
  mc = target;
  dis = dispatcher;
  this.initEvent();
}

LeftButtonMediator.prototype.initEvent = function(){
  mc.on(EventName.BUTTON_CLICK, onButtonDown)
}

function onButtonDown()
{
  dis.dispatch(EventName.REEL_RESIZE);
}	

module.exports = LeftButtonMediator;