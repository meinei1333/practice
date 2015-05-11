ReelView = function() {
  PIXI.Graphics.call(this);
  this.init();
}

ReelView.prototype = Object.create(PIXI.Graphics.prototype);
ReelView.prototype.constructor = ReelView;

ReelView.prototype.init = function() {
  this.lineStyle(2, 0xFF00FF, 1);
  this.beginFill(0xFF00BB, 0.25);
  this.drawRoundedRect(0, 0, 600, 500, 10);
  this.endFill();
}

ReelView.prototype.resize = function(){
  if(this.width == 100){
    TweenLite.to(this, 1.5, {width:600});
  }else{
    TweenLite.to(this, 1.5, {width:100});
  }
}

module.exports = ReelView;