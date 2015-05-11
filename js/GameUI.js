reelView = require("./view/reelView.js");
leftButtonViewR = require("./view/leftButtonView.js");
rightButtonViewR = require("./view/rightButtonView.js");

GameUI = function() {
  PIXI.Sprite.call(this);
  
  reelView = new reelView();
  leftButtonView = new leftButtonView();
  rightButtonView = new rightButtonView();

  this.addChild(reelView);
  this.addChild(leftButtonView);
  this.addChild(rightButtonView);
};

GameUI.prototype = Object.create(PIXI.Sprite.prototype);
GameUI.prototype.constructor = GameUI;

module.exports = GameUI;