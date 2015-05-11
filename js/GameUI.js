reelView = require("./view/reelView.js");
leftButtonView = require("./view/leftButtonView.js");
rightButtonView = require("./view/rightButtonView.js");

GameUI = function() {
  PIXI.Sprite.call(this);

  this.reelView = new reelView();
  this.leftButtonView = new leftButtonView();
  this.rightButtonView = new rightButtonView();
 
  this.addChild(this.reelView);
  this.addChild(this.leftButtonView);
  this.addChild(this.rightButtonView);
};

GameUI.prototype = Object.create(PIXI.Sprite.prototype);
GameUI.prototype.constructor = GameUI;

module.exports = GameUI;