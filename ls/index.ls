require! {
  \../Background
  \./EventName.ls
  \./GameUI
  \./StartApplication
}

renderer = PIXI.auto-detect-renderer 1000, 800, {alpha: 0}
document.body.append-child renderer.view

game-ui = new GameUI!

do !function animate
  renderer.render game-ui 
  request-animation-frame animate

app = new StartApplication game-ui
