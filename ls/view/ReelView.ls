module.exports = class ReelView extends PIXI.Graphics
  !->
    super!

    @line-style 2 0xFF00FF 1
    @begin-fill 0xFF00BB 0.25
    @draw-rounded-rect 0 0 600 500 10
    @end-fill!

  resize: !->
    width = if @width is 100 then 600 else 100
    TweenLite.to @, 1.5s, {width: width}