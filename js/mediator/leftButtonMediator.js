
var mc;
var dis;
var leftButtonMediator = function(target, dispatcher) {
	mc = target;
	dis = dispatcher;
	this.initEvent();
}

leftButtonMediator.prototype.initEvent = function(){
    mc.on(eventName.buttonClick, onButtonDown)
}

function onButtonDown()
{
    dis.dispatch(eventName.reelResize);
}	

module.exports = leftButtonMediator;