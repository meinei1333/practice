require! \./../EventName

module.exports = class ReelMediator
  (target, @dispatcher) !->
    @reel = target
    @dispatcher.add-event-listener EventName.REEL_RESIZE, @do-resize

  do-resize: !~> @reel.resize!