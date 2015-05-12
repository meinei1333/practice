var EventName = require("./EventName");
var ReelMediator = require("./mediator/ReelMediator");
var LeftButtonMediator = require("./mediator/LeftButtonMediator");
var RightButtonMediator = require("./mediator/RightButtonMediator");
// application function
var StartApplication = soma.Application.extend({
  //struction
  constructor: function(gameUI) {
    this.gameUI = gameUI;
    soma.Application.call(this);
  },
  init: function() {
   	  this.mediators.create(ReelMediator, this.gameUI.ReelView);
      this.mediators.create(LeftButtonMediator, this.gameUI.LeftButtonView);
      this.mediators.create(RightButtonMediator, this.gameUI.RightButtonView);
    }
});

module.exports = StartApplication;