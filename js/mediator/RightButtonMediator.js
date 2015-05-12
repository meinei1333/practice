var EventName = require("../EventName");
var mc;
var dis;

var RightButtonMediator = function(target, dispatcher) {
  this.target = target;
  this.dispatcher = dispatcher;
  this.initEvent();
}

RightButtonMediator.prototype.initEvent = function(){
  this.target.on(EventName.BUTTON_CLICK, onButtonDown.bind(this));
}

function onButtonDown()
{
  this.dispatcher.dispatch(EventName.REEL_RESIZE);
}	

module.exports = RightButtonMediator;