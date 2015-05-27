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

require! {
  \../Background
  \./EventName.ls
  \./GameUI
}

renderer = PIXI.auto-detect-renderer 1000, 800,  alpha: 0 
document.body.append-child renderer.view

game-ui = new GameUI!

do !function animate
  renderer.render game-ui 
  requestAnimationFrame animate;
