require! {
  \./view/LeftButtonView
  \./view/RightButtonView
}
class GameUI extends PIXI.Container
  !->
    super!

    left-button-view = new LeftButtonView!
      ..x = 5
      ..y = 300
    @add-child left-button-view


    right-button-view = new RightButtonView!
      ..x = 500
      ..y = 500
    @add-child right-button-view  

module.exports = GameUI;