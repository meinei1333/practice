require! \./../EventName

class RightButtonView extends PIXI.Graphics
  !->
    
    super!
    @radius = 100
    @line-style 0
    @begin-fill 0xFFFF08, 0.5
    @draw-circle @radius / 2 ,@radius / 2 ,@radius / 2
    @end-fill!

    @button-mode = true
    @interactive = true

    @on \mouseup @on-button-up
    .on \touchend @on-button-up
    .on \mouseupoutside @on-button-up
    .on \touchendoutside @on-button-up
    .on \mouseover @on-button-over
    .on \mouseout @on-button-out
    .on \mousedown @on-button-downbb
    .on \touchstart @on-button-downbb

  on-button-downbb: !->
    @clear!
    @line-style 0
    @begin-fill 0xFFFFFF 0.5
    @draw-circle @radius * 0.5, @radius * 0.5, @radius * 0.5
    @end-fill!

    @emit EventName.BUTTON_CLICK

  on-button-up: !->
    @clear!
    @line-style 0
    @begin-fill 0xFFFFFF 0.5
    @draw-circle @radius * 0.5, @radius * 0.5, @radius * 0.5
    @end-fill!

  on-button-over: !->
    @clear!
    @line-style 0
    @begin-fill 0xFFFFFF 0.5
    @draw-circle @radius * 0.5, @radius * 0.5, @radius * 0.5
    @end-fill!

  on-button-out: !->
    @clear!
    @lineStyle 0
    @begin-fill 0xFFFF08 0.5
    @draw-circle @radius * 0.5, @radius * 0.5, @radius * 0.5
    @end-fill!

module.exports = RightButtonView