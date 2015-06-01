require! {
  \./EventName
  \./mediator/LeftButtonMediator
  \./mediator/RightButtonMediator
  \./mediator/ReelMediator
  \./model/FakeServerModel
  \./command/InitGameCommand
  \./command/RightButtonClickCommand
  \./command/LeftButtonClickCommand
}

module.exports = class StartApplication extends soma.Application

  (@game-ui) !->
    soma.Application.call @

  init: !->
    @mediators
      ..create LeftButtonMediator, @game-ui.left-button-view
      ..create RightButtonMediator, @game-ui.right-button-view
      ..create ReelMediator, @game-ui.reel-view

    @injector.mapClass "fakeServerModel", FakeServerModel, true

    @commands
      ..add EventName.INIT_GAME, InitGameCommand
      ..add EventName.RIGHT_BUTTON_CLICK, RightButtonClickCommand
      ..add EventName.LEFT_BUTTON_CLICK, LeftButtonClickCommand

  start: !->
    @dispatcher.dispatch EventName.INIT_GAME