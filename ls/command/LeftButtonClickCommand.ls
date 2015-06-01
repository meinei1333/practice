module.exports = class LeftButtonClickCommand
  (@fakeServerModel) !->

  execute: !->
    @fakeServerModel.reel-resize!