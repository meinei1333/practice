EventName = require("./EventName");
GameUI = require("./GameUI.js");
ReelMediator = require("./mediator/ReelMediator.js");
LeftButtonMediator = require("./mediator/LeftButtonMediator.js");
RightButtonMediator = require("./mediator/RightButtonMediator.js");
StartApplication = require("./StartApplication.js");
require("../Background.css");

renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
document.body.appendChild(renderer.view);

GameUI = new GameUI();

animate();

function animate() {
  renderer.render(GameUI);
  requestAnimationFrame( animate );
}

var app = new StartApplication(GameUI);