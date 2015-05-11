
// application function
var StartSoma = soma.Application.extend({
  //struction
  constructor: function(gameUI) {
    this.gameUI = gameUI;
	  soma.Application.call(this);
	},
  init: function() {
   	  this.mediators.create(reelMediator, this.gameUI.reelView);
      this.mediators.create(leftButtonMediator, this.gameUI.leftButtonView);
      this.mediators.create(rightButtonMediator, this.gameUI.rightButtonView);
    }
});

module.exports = StartSoma;