var textureButton = PIXI.Texture.fromImage('_assets/button.png');
var textureButtonDown = PIXI.Texture.fromImage('_assets/buttonDown.png');
var textureButtonOver = PIXI.Texture.fromImage('_assets/buttonOver.png');

LeftButtonView = function() {
  PIXI.Sprite.call(this,textureButton);
  this.init();
}

LeftButtonView.prototype = Object.create(PIXI.Sprite.prototype);
LeftButtonView.prototype.constructor = LeftButtonView;
	
LeftButtonView.prototype.init = function() {
  this.y = 550;
  this.buttonMode = true;
  this.interactive = true;
	
  this
    .on('mouseup', onButtonUp)
    .on('touchend', onButtonUp)
    .on('mouseupoutside', onButtonUp)
    .on('touchendoutside', onButtonUp)
    .on('mouseover', onButtonOver)
    .on('mouseout', onButtonOut)
    .on('mousedown', onButtonDown)
    .on('touchstart', onButtonDown)
}

function onButtonDown()
{
  this.texture = textureButtonDown;
  this.emit(EventName.BUTTON_CLICK);
}

function onButtonUp()
{
  this.isdown = false;

  if (this.isOver)
  {
    this.texture = textureButtonOver;
  }
  else
  {
    this.texture = textureButton;
  }
}

function onButtonOver()
{
  this.isOver = true;

  if (this.isdown)
  {
    return;
  }

  this.texture = textureButtonOver;
}

function onButtonOut()
{
  this.isOver = false;

  if (this.isdown)
  {
    return;
  }

  this.texture = textureButton;
}

module.exports = LeftButtonView;
