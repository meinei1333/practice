module.exports = class InitGameCommand
  (@fakeServerModel) !->

  execute: !->
    @fakeServerModel.start-game!