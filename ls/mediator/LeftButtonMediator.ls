require! \./../EventName

module.exports = class LeftButtonMediator
  (target, @dispatcher) !->    
    @left-button = target
      ..on EventName.BUTTON_CLICK, @on-button-down

    @dispatcher.addEventListener EventName.START_GAME, !~> @left-button.visible = true

  on-button-down: !~> @dispatcher.dispatch EventName.LEFT_BUTTON_CLICK
