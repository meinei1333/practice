require! {
  \./EventName
  \./mediator/LeftButtonMediator
  \./mediator/RightButtonMediator
  \./mediator/ReelMediator
}

module.exports = class StartApplication extends soma.Application

  (@game-ui) !->
    soma.Application.call @

  init: !->
    @mediators.create LeftButtonMediator, @game-ui.left-button-view
    @mediators.create RightButtonMediator, @game-ui.right-button-view
    @mediators.create ReelMediator, @game-ui.reel-view

