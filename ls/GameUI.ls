require! {
  \./view/LeftButtonView
  \./view/RightButtonView
  \./view/ReelView
}
module.exports =  class GameUI extends PIXI.Container
  !->
    super!

    @left-button-view = new LeftButtonView!
      ..x = 5
      ..y = 500
    @add-child @left-button-view


    @right-button-view = new RightButtonView!
      ..x = 500
      ..y = 500
    @add-child @right-button-view 

    @reel-view = new ReelView!
      ..x = 0
      ..y = 0
    @add-child @reel-view