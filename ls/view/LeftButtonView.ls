EventName = require \../EventName.ls

textureButton = PIXI.Texture.fromImage \_assets/button.png
textureButtonDown = PIXI.Texture.fromImage \_assets/buttonDown.png
textureButtonOver = PIXI.Texture.fromImage \_assets/buttonOver.png

class LeftButtonView extends PIXI.Sprite
  ->
    PIXI.Sprite.call this, textureButton

    @y = 550;

    @buttonMode = true;
    @interactive = true;

    @on "mouseup", onButtonUp
        .on "touchend", onButtonUp
        .on "mouseupoutside", onButtonUp
        .on "touchendoutside", onButtonUp
        .on "mouseover", onButtonOver
        .on "mouseout", onButtonOut
        .on "mousedown", onButtonDown
        .on "touchstart", onButtonDown

!function onButtonDown 
  @texture = textureButtonDown
  @emit(EventName.BUTTON_CLICK)

!function onButtonUp
  @isdown = false
  if @isOver
    @texture = textureButtonOver
  else
    @texture = textureButton

!function onButtonOver
  @isOver = true
  if @isdown
    return
  @texture = textureButtonOver

!function onButtonOut
  @isOver = false
  if @isdown
    return
  @texture = textureButton

module.exports = LeftButtonView;