eventName = require("./eventName.js");
GameUI = require("./GameUI.js");
reelMediator = require("./mediator/reelMediator.js");
leftButtonMediator = require("./mediator/leftButtonMediator.js");
rightButtonMediator = require("./mediator/rightButtonMediator.js");

renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
document.body.appendChild(renderer.view);

GameUI = new GameUI();

animate();

function animate() {
    renderer.render(GameUI);
    requestAnimationFrame( animate );
}

//------------------------------------------------------soma---------------------------------------------------------//

// application function
var QuickStartApplication = soma.Application.extend({
	//struction
   init: function() {
   		this.mediators.create(reelMediator, reelView);
    	this.mediators.create(leftButtonMediator, leftButtonView);
    	this.mediators.create(rightButtonMediator, rightButtonView);
    }
});

  // create application
var app = new QuickStartApplication();

