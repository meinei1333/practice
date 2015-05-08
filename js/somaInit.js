
// application function
var QuickStartApplication = soma.Application.extend({
   init: function() {
   	console.log("123");
   		this.mediators.create(reelMediator, reelview);
    	this.mediators.create(leftButtonMediator, leftBtn);
    	this.mediators.create(rightButtonMediator, rightBtn);
    }
});

  // create application
var app = new QuickStartApplication();