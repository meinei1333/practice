EventName = require("./EventName");
GameUI = require("./GameUI");
ReelMediator = require("./mediator/ReelMediator");
LeftButtonMediator = require("./mediator/LeftButtonMediator");
RightButtonMediator = require("./mediator/RightButtonMediator");
StartApplication = require("./StartApplication");
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