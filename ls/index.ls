/*GameUI = require "./GameUI"
StartApplication = require "./StartApplication"
require "../Background.css"

renderer = PIXI.autoDetectRenderer 1000, 800, { alpha:0 }
document.body.appendChild renderer.view

GameUI = new GameUI();

animate!

animate = !-> 
  renderer.render GameUI
  requestAnimationFrame animate

app = new StartApplication GameUI*/

EventName = require "./EventName.ls"

LeftButtonView = require "./view/LeftButtonView.ls"

renderer = PIXI.autoDetectRenderer 1000, 800, { alpha:0 }
document.body.appendChild renderer.view

LeftButtonView = new LeftButtonView!

do !function animate
  renderer.render LeftButtonView
  requestAnimationFrame animate;
