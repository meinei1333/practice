require! \./../EventName

module.exports = class RightButtonView
  (target, @dispatcher) !->
    @right-button = target
      ..on EventName.BUTTON_CLICK, @on-button-down

  on-button-down: !~> @dispatcher.dispatch EventName.REEL_RESIZE