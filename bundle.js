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

	/*GameUI = require "./GameUI"
	StartApplication = require "./StartApplication"
	require "../Background.css"

	renderer = PIXI.autoDetectRenderer 1000, 800, { alpha:0 }
	document.body.appendChild renderer.view

	GameUI = new GameUI();

	animate!

	animate = !-> 
	  renderer.render GameUI
	  requestAnimationFrame animate

	app = new StartApplication GameUI*/
	var EventName, LeftButtonView, renderer;
	EventName = __webpack_require__(1);
	LeftButtonView = __webpack_require__(2);
	renderer = PIXI.autoDetectRenderer(1000, 800, {
	  alpha: 0
	});
	document.body.appendChild(renderer.view);
	LeftButtonView = new LeftButtonView();
	function animate(){
	  renderer.render(LeftButtonView);
	  requestAnimationFrame(animate);
	} animate();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
	  {
	    BUTTON_CLICK: 'BUTTON_CLICK'
	  }, {
	    REEL_RESIZE: 'REEL_RESIZE'
	  }
	];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, textureButton, textureButtonDown, textureButtonOver, LeftButtonView;
	EventName = __webpack_require__(1);
	textureButton = PIXI.Texture.fromImage('_assets/button.png');
	textureButtonDown = PIXI.Texture.fromImage('_assets/buttonDown.png');
	textureButtonOver = PIXI.Texture.fromImage('_assets/buttonOver.png');
	LeftButtonView = (function(superclass){
	  var prototype = extend$((import$(LeftButtonView, superclass).displayName = 'LeftButtonView', LeftButtonView), superclass).prototype, constructor = LeftButtonView;
	  function LeftButtonView(){
	    PIXI.Sprite.call(this, textureButton);
	    this.y = 550;
	    this.buttonMode = true;
	    this.interactive = true;
	    this.on("mouseup", onButtonUp).on("touchend", onButtonUp).on("mouseupoutside", onButtonUp).on("touchendoutside", onButtonUp).on("mouseover", onButtonOver).on("mouseout", onButtonOut).on("mousedown", onButtonDown).on("touchstart", onButtonDown);
	  }
	  return LeftButtonView;
	}(PIXI.Sprite));
	function onButtonDown(){
	  this.texture = textureButtonDown;
	  this.emit(EventName.BUTTON_CLICK);
	}
	function onButtonUp(){
	  this.isdown = false;
	  if (this.isOver) {
	    this.texture = textureButtonOver;
	  } else {
	    this.texture = textureButton;
	  }
	}
	function onButtonOver(){
	  this.isOver = true;
	  if (this.isdown) {
	    return;
	  }
	  this.texture = textureButtonOver;
	}
	function onButtonOut(){
	  this.isOver = false;
	  if (this.isdown) {
	    return;
	  }
	  this.texture = textureButton;
	}
	module.exports = LeftButtonView;
	function extend$(sub, sup){
	  function fun(){} fun.prototype = (sub.superclass = sup).prototype;
	  (sub.prototype = new fun).constructor = sub;
	  if (typeof sup.extended == 'function') sup.extended(sub);
	  return sub;
	}
	function import$(obj, src){
	  var own = {}.hasOwnProperty;
	  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
	  return obj;
	}

/***/ }
/******/ ]);