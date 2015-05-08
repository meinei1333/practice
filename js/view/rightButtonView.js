var radius = 100;

rightButtonView = function() {
    PIXI.Graphics.call(this);

    this.init();
};

rightButtonView.prototype = Object.create(PIXI.Graphics.prototype);
rightButtonView.prototype.constructor = rightButtonView;
	
rightButtonView.prototype.init = function() {
	this.lineStyle(0);
	this.beginFill(0xFFFF0B, 0.5);
	this.drawCircle(radius/2, radius/2,radius/2);
	this.endFill();


	this.x = 500;
	this.y = 550;
	
	this.buttonMode = true;
    this.interactive = true;
	
	this
    .on('mouseup', onButtonUp)
    .on('touchend', onButtonUp)
    .on('mouseupoutside', onButtonUp)
    .on('touchendoutside', onButtonUp)
    .on('mouseover', onButtonOver)
    .on('mouseout', onButtonOut)
    .on('mousedown', onButtonDown)
    .on('touchstart', onButtonDown)
}

function onButtonDown()
{
    this.clear();
	this.lineStyle(0);
	this.beginFill(0xFFFFFF, 0.5);
	this.drawCircle(radius/2, radius/2,radius/2);
	this.endFill();

    this.emit(eventName.buttonClick)
}

function onButtonUp()
{
    this.clear();
	this.lineStyle(0);
	this.beginFill(0xFFFFFF, 0.5);
	this.drawCircle(radius/2, radius/2,radius/2);
	this.endFill();
}

function onButtonOver()
{
    this.clear();
	this.lineStyle(0);
	this.beginFill(0xFFFFFF, 0.5);
	this.drawCircle(radius/2, radius/2,radius/2);
	this.endFill();
}

function onButtonOut()
{
    this.clear();
	this.lineStyle(0);
	this.beginFill(0xFFFF0B, 0.5);
	this.drawCircle(radius/2, radius/2,radius/2);
	this.endFill();
}

module.exports = rightButtonView;
