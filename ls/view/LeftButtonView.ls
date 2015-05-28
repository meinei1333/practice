require! \./../EventName

texture-button = PIXI.Texture.fromImage \_assets/button.png
texture-button-down = PIXI.Texture.fromImage \_assets/buttonDown.png
texture-button-over = PIXI.Texture.fromImage \_assets/buttonOver.png

class LeftButtonView extends PIXI.Sprite
  !->
    super texture-button

    @button-mode = true;
    @interactive = true;

    @on \mouseup, @on-button-up
    .on \touchend, @on-button-up
    .on \mouseupoutside, @on-button-up
    .on \touchendoutside, @on-button-up
    .on \mouseover, @on-button-over
    .on \mouseout, @on-button-out
    .on \mousedown, @on-button-downaa
    .on \touchstart, @on-button-downaa

  on-button-downaa: !-> 
    @texture = texture-button-down
    @emit EventName.BUTTON_CLICK

  on-button-up: !->
    @is-down = false
    @texture = if @is-over then texture-button-over else texture-button

  on-button-over: !->
    @is-over = true
    return if @is-down
    @texture = texture-button-over

  on-button-out: !->
    @is-over = false
    return if @is-down
    @texture = texture-button

module.exports = LeftButtonView