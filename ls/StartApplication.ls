require! {
  \./EventName
  \./mediator/LeftButtonMediator
  \./mediator/RightButtonMediator
  \./mediator/ReelMediator
}

StartApplication = soma.Application.extend(

  constructor: (game-ui) !->
    @game-ui = game-ui
    soma.Application.call @

  init: !->
    @mediators.create LeftButtonMediator, @game-ui.left-button-view
    @mediators.create RightButtonMediator, @game-ui.right-button-view
    @mediators.create ReelMediator, @game-ui.reel-view
)

module.exports = StartApplication