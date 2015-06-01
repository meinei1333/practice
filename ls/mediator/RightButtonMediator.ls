require! \./../EventName

module.exports = class RightButtonView
  (target, @dispatcher) !->
    @right-button = target
      ..on EventName.BUTTON_CLICK, @on-button-down

    @dispatcher.addEventListener EventName.START_GAME, !~> @right-button.visible = true

  on-button-down: !~> @dispatcher.dispatch EventName.RIGHT_BUTTON_CLICK