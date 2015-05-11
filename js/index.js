eventName = require("./eventName.js");
GameUI = require("./GameUI.js");
reelMediator = require("./mediator/reelMediator.js");
leftButtonMediator = require("./mediator/leftButtonMediator.js");
rightButtonMediator = require("./mediator/rightButtonMediator.js");
StartSoma = require("./StartSoma.js");

renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
document.body.appendChild(renderer.view);

GameUI = new GameUI();

animate();

function animate() {
  renderer.render(GameUI);
  requestAnimationFrame( animate );
}

var app = new StartSoma(GameUI);