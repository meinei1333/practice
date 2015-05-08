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

	eventName = __webpack_require__(1);
	reelview = __webpack_require__(2);
	reelMediator = __webpack_require__(3);
	leftButtonView = __webpack_require__(4);
	leftButtonMediator = __webpack_require__(5);
	rightButtonView = __webpack_require__(6);
	rightButtonMediator = __webpack_require__(7);

	renderer = PIXI.autoDetectRenderer(1000,800, {alpha : 0});
	document.body.appendChild(renderer.view);
	stage = new PIXI.Container();

	reelView = new reelView();
	stage.addChild(reelView);

	var leftBtn = new leftButtonView();
	stage.addChild(leftBtn);

	var rightBtn = new rightButtonView();
	stage.addChild(rightBtn);

	animate();

	function animate() {
	    renderer.render(stage);
	    requestAnimationFrame( animate );
	}

	//------------------------------------------------------soma---------------------------------------------------------//

	// application function
	var QuickStartApplication = soma.Application.extend({
	   init: function() {
	   		this.mediators.create(reelMediator, reelview);
	    	this.mediators.create(leftButtonMediator, leftBtn);
	    	this.mediators.create(rightButtonMediator, rightBtn);
	    }
	});

	  // create application
	var app = new QuickStartApplication();



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		buttonClick:"buttonClick", 
		reelResize:"reelResize", 
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	
	reelView = function() {
	    PIXI.Graphics.call(this);
		this.init();
	};

	reelView.prototype = Object.create(PIXI.Graphics.prototype);
	reelView.prototype.constructor = reelView;

	reelView.prototype.init = function() {
		//console.log("this:",this)
		this.lineStyle(2, 0xFF00FF, 1);
		this.beginFill(0xFF00BB, 0.25);
		this.drawRoundedRect(0, 0, 600, 500, 10);
		this.endFill();
	}

	reelView.resize = function(){
		console.log("reelView:",reelView.width);
		if(reelView.width == 100){
			TweenLite.to(reelView, 1.5, {width:600});
		}else{
			TweenLite.to(reelView, 1.5, {width:100});
		}
	}

	module.exports = reelView;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var dis;

	var mc;
	var reelMediator = function(target, dispatcher) {
		mc = target;
		dis = dispatcher;

		 dispatcher.addEventListener(eventName.reelResize, function(event) {
		    mc.resize();
		  });
	}

	module.exports = reelMediator;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var textureButton = PIXI.Texture.fromImage('_assets/button.png');
	var textureButtonDown = PIXI.Texture.fromImage('_assets/buttonDown.png');
	var textureButtonOver = PIXI.Texture.fromImage('_assets/buttonOver.png');

	leftButtonView = function() {
	    PIXI.Sprite.call(this,textureButton);

	    this.init();
	};

	leftButtonView.prototype = Object.create(PIXI.Sprite.prototype);
	leftButtonView.prototype.constructor = leftButtonView;
		
	leftButtonView.prototype.init = function() {
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
	    this.emit(eventName.buttonClick)
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



	module.exports = leftButtonView;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	
	var mc;
	var dis;
	var leftButtonMediator = function(target, dispatcher) {
		mc = target;
		dis = dispatcher;
		this.initEvent();
	}

	leftButtonMediator.prototype.initEvent = function(){
	    mc.on(eventName.buttonClick, onButtonDown)
	}

	function onButtonDown()
	{
	    console.log("onButtonDown");
	    dis.dispatch(eventName.reelResize);
	}	

	module.exports = leftButtonMediator;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var radius = 100;

	rightButtonView = function() {
	    PIXI.Graphics.call(this);

	    this.init();
	};

	rightButtonView.prototype = Object.create(PIXI.Graphics.prototype);
	rightButtonView.prototype.constructor = rightButtonView;
		
	rightButtonView.prototype.init = function() {
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

	    this.emit(eventName.buttonClick)
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

	module.exports = rightButtonView;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	var mc;
	var dis;
	var rightButtonMediator = function(target, dispatcher) {
		mc = target;
		dis = dispatcher;
		this.initEvent();
	}

	rightButtonMediator.prototype.initEvent = function(){
	    mc.on(eventName.buttonClick, onButtonDown)
	}

	function onButtonDown()
	{
	    console.log("onButtonDown");
	    dis.dispatch(eventName.reelResize);
	}	

	module.exports = rightButtonMediator;

/***/ }
/******/ ]);