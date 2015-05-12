ReelView = require("./view/ReelView");
LeftButtonView = require("./view/LeftButtonView");
RightButtonView = require("./view/RightButtonView");

GameUI = function() {
  PIXI.Sprite.call(this);

  this.ReelView = new ReelView();
  this.LeftButtonView = new LeftButtonView();
  this.RightButtonView = new RightButtonView();
 
  this.addChild(this.ReelView);
  this.addChild(this.LeftButtonView);
  this.addChild(this.RightButtonView);
};

GameUI.prototype = Object.create(PIXI.Sprite.prototype);
GameUI.prototype.constructor = GameUI;

module.exports = GameUI;