/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	EventName = __webpack_require__(1);
	GameUI = __webpack_require__(2);
	ReelMediator = __webpack_require__(3);
	LeftButtonMediator = __webpack_require__(4);
	RightButtonMediator = __webpack_require__(5);
	StartSoma = __webpack_require__(6);

	renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
	document.body.appendChild(renderer.view);

	GameUI = new GameUI();

	animate();

	function animate() {
	  renderer.render(GameUI);
	  requestAnimationFrame( animate );
	}

	var app = new StartSoma(GameUI);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  BUTTON_CLICK:"BUTTON_CLICK",
	  REEL_RESIZE:"REEL_RESIZE"
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	ReelView = __webpack_require__(7);
	LeftButtonView = __webpack_require__(8);
	RightButtonView = __webpack_require__(9);

	GameUI = function() {
	  PIXI.Sprite.call(this);

	  this.ReelView = new ReelView();
	  this.LeftButtonView = new LeftButtonView();
	  this.RightButtonView = new RightButtonView();
	 
	  this.addChild(this.ReelView);
	  this.addChild(this.LeftButtonView);
	  this.addChild(this.RightButtonView);
	};

	GameUI.prototype = Object.create(PIXI.Sprite.prototype);
	GameUI.prototype.constructor = GameUI;

	module.exports = GameUI;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var dis;
	var mc;

	var ReelMediator = function(target, dispatcher) {
	  mc = target;
	  dis = dispatcher;

	  dispatcher.addEventListener(EventName.REEL_RESIZE, function(event) {
	    mc.resize();
	  })
	}

	module.exports = ReelMediator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var mc;
	var dis;
	var LeftButtonMediator = function(target, dispatcher) {
	  mc = target;
	  dis = dispatcher;
	  this.initEvent();
	}

	LeftButtonMediator.prototype.initEvent = function(){
	  mc.on(EventName.BUTTON_CLICK, onButtonDown)
	}

	function onButtonDown()
	{
	  dis.dispatch(EventName.REEL_RESIZE);
	}	

	module.exports = LeftButtonMediator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var mc;
	var dis;

	var RightButtonMediator = function(target, dispatcher) {
	  mc = target;
	  dis = dispatcher;
	  this.initEvent();
	}

	RightButtonMediator.prototype.initEvent = function(){
	  mc.on(EventName.BUTTON_CLICK, onButtonDown)
	}

	function onButtonDown()
	{
	  dis.dispatch(EventName.REEL_RESIZE);
	}	

	module.exports = RightButtonMediator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	// application function
	var StartSoma = soma.Application.extend({
	  //struction
	  constructor: function(gameUI) {
	    this.gameUI = gameUI;
	    soma.Application.call(this);
	  },
	  init: function() {
	   	  this.mediators.create(ReelMediator, this.gameUI.ReelView);
	      this.mediators.create(LeftButtonMediator, this.gameUI.LeftButtonView);
	      this.mediators.create(RightButtonMediator, this.gameUI.RightButtonView);
	    }
	});

	module.exports = StartSoma;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	ReelView = function() {
	  PIXI.Graphics.call(this);
	  this.init();
	}

	ReelView.prototype = Object.create(PIXI.Graphics.prototype);
	ReelView.prototype.constructor = ReelView;

	ReelView.prototype.init = function() {
	  this.lineStyle(2, 0xFF00FF, 1);
	  this.beginFill(0xFF00BB, 0.25);
	  this.drawRoundedRect(0, 0, 600, 500, 10);
	  this.endFill();
	}

	ReelView.prototype.resize = function(){
	  if(this.width == 100){
	    TweenLite.to(this, 1.5, {width:600});
	  }else{
	    TweenLite.to(this, 1.5, {width:100});
	  }
	}

	module.exports = ReelView;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var radius = 100;

	RightButtonView = function() {
	  PIXI.Graphics.call(this);
	  this.init();
	}

	RightButtonView.prototype = Object.create(PIXI.Graphics.prototype);
	RightButtonView.prototype.constructor = RightButtonView;
		
	RightButtonView.prototype.init = function() {
	  this.lineStyle(0);
	  this.beginFill(0xFFFF0B, 0.5);
	  this.drawCircle(radius/2, radius/2,radius/2);
	  this.endFill();

	  this.x = 500;
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
	  this.clear();
	  this.lineStyle(0);
	  this.beginFill(0xFFFFFF, 0.5);
	  this.drawCircle(radius/2, radius/2,radius/2);
	  this.endFill();

	  this.emit(EventName.BUTTON_CLICK)
	}

	function onButtonUp()
	{
	  this.clear();
	  this.lineStyle(0);
	  this.beginFill(0xFFFFFF, 0.5);
	  this.drawCircle(radius/2, radius/2,radius/2);
	  this.endFill();
	}

	function onButtonOver()
	{
	  this.clear();
	  this.lineStyle(0);
	  this.beginFill(0xFFFFFF, 0.5);
	  this.drawCircle(radius/2, radius/2,radius/2);
	  this.endFill();
	}

	function onButtonOut()
	{
	  this.clear();
	  this.lineStyle(0);
	  this.beginFill(0xFFFF0B, 0.5);
	  this.drawCircle(radius/2, radius/2,radius/2);
	  this.endFill();
	}

	module.exports = RightButtonView;


/***/ }
/******/ ]);