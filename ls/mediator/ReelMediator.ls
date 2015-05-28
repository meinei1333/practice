require! \./../EventName

class ReelMediator
  (target, dispatcher) !->
    @target = target
    @dispatcher = dispatcher
    @dispatcher.add-event-listener EventName.REEL_RESIZE, @do-resize

  do-resize: !~>
    @target.resize!

module.exports = ReelMediator