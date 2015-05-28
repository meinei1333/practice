require! \./../EventName

class LeftButtonMediator
  (target, dispatcher) !->    
    @target = target
    @dispatcher = dispatcher
    @target.on EventName.BUTTON_CLICK, @on-Button-down

  on-Button-down: !~>
    @dispatcher.dispatch EventName.REEL_RESIZE

module.exports = LeftButtonMediator