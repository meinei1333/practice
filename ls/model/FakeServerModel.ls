require! \./../EventName

module.exports = class FakeServerModel
  
  (@dispatcher) !->

  start-game: !->
    <~! set-timeout _, 5000s
    @dispatcher.dispatch EventName.START_GAME

  reel-resize: !->
    <~! set-timeout _, 2000s
    @dispatcher.dispatch EventName.REEL_RESIZE