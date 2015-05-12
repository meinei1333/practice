var EventName = require("../EventName");

var LeftButtonMediator = function(target, dispatcher) {
  this.target = target;
  this.dispatcher = dispatcher; 
  this.initEvent();
}

LeftButtonMediator.prototype.initEvent = function(){
  this.target.on(EventName.BUTTON_CLICK, onButtonDown.bind(this))
}

function onButtonDown()
{
  this.dispatcher.dispatch(EventName.REEL_RESIZE);
}	

function getDispatcher() { 
  return this.dispatcher; 
}

module.exports = LeftButtonMediator;