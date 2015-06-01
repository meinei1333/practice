require! \./../EventName

module.exports = class LeftButtonMediator
  (target, @dispatcher) !->    
    @left-button = target
      ..on EventName.BUTTON_CLICK, @on-button-down

  on-button-down: !~> @dispatcher.dispatch EventName.REEL_RESIZE
