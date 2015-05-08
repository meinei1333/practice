eventName = require("./eventName.js");
reelView = require("./view/reelView.js");
reelMediator = require("./mediator/reelMediator.js");
leftButtonView = require("./view/leftButtonView.js");
leftButtonMediator = require("./mediator/leftButtonMediator.js");
rightButtonView = require("./view/rightButtonView.js");
rightButtonMediator = require("./mediator/rightButtonMediator.js");

renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
document.body.appendChild(renderer.view);
stage = new PIXI.Container();

reelView = new reelView();
stage.addChild(reelView);

var leftBtn = new leftButtonView();
stage.addChild(leftBtn);

var rightBtn = new rightButtonView();
stage.addChild(rightBtn);

animate();

function animate() {
    renderer.render(stage);
    requestAnimationFrame( animate );
}

//------------------------------------------------------soma---------------------------------------------------------//

// application function
var QuickStartApplication = soma.Application.extend({
   init: function() {
   		this.mediators.create(reelMediator, reelView);
    	this.mediators.create(leftButtonMediator, leftBtn);
    	this.mediators.create(rightButtonMediator, rightBtn);
    }
});

  // create application
var app = new QuickStartApplication();

