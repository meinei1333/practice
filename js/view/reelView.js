
reelView = function() {
    PIXI.Graphics.call(this);
	this.init();
};

reelView.prototype = Object.create(PIXI.Graphics.prototype);
reelView.prototype.constructor = reelView;

reelView.prototype.init = function() {
	//console.log("this:",this)
	this.lineStyle(2, 0xFF00FF, 1);
	this.beginFill(0xFF00BB, 0.25);
	this.drawRoundedRect(0, 0, 600, 500, 10);
	this.endFill();
}

reelView.resize = function(){
	console.log("reelView:",reelView.width);
	if(reelView.width == 100){
		TweenLite.to(reelView, 1.5, {width:600});
	}else{
		TweenLite.to(reelView, 1.5, {width:100});
	}
}

module.exports = reelView;