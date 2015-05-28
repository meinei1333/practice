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
	var Background, EventName, GameUI, StartApplication, renderer, gameUi, app;
	Background = __webpack_require__(4);
	EventName = __webpack_require__(1);
	GameUI = __webpack_require__(2);
	StartApplication = __webpack_require__(3);
	renderer = PIXI.autoDetectRenderer(1000, 800, {
	  alpha: 0
	});
	document.body.appendChild(renderer.view);
	gameUi = new GameUI();
	function animate(){
	  renderer.render(gameUi);
	  requestAnimationFrame(animate);
	} animate();
	app = new StartApplication(gameUi);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  BUTTON_CLICK: 'BUTTON_CLICK',
	  REEL_RESIZE: 'REEL_RESIZE'
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var LeftButtonView, RightButtonView, ReelView, GameUI;
	LeftButtonView = __webpack_require__(6);
	RightButtonView = __webpack_require__(7);
	ReelView = __webpack_require__(8);
	GameUI = (function(superclass){
	  var prototype = extend$((import$(GameUI, superclass).displayName = 'GameUI', GameUI), superclass).prototype, constructor = GameUI;
	  function GameUI(){
	    var x$, y$, z$;
	    GameUI.superclass.call(this);
	    x$ = this.leftButtonView = new LeftButtonView();
	    x$.x = 5;
	    x$.y = 500;
	    this.addChild(this.leftButtonView);
	    y$ = this.rightButtonView = new RightButtonView();
	    y$.x = 500;
	    y$.y = 500;
	    this.addChild(this.rightButtonView);
	    z$ = this.reelView = new ReelView();
	    z$.x = 0;
	    z$.y = 0;
	    this.addChild(this.reelView);
	  }
	  return GameUI;
	}(PIXI.Container));
	module.exports = GameUI;
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

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, LeftButtonMediator, RightButtonMediator, ReelMediator, StartApplication;
	EventName = __webpack_require__(1);
	LeftButtonMediator = __webpack_require__(9);
	RightButtonMediator = __webpack_require__(10);
	ReelMediator = __webpack_require__(11);
	StartApplication = soma.Application.extend({
	  constructor: function(gameUi){
	    this.gameUi = gameUi;
	    soma.Application.call(this);
	  },
	  init: function(){
	    this.mediators.create(LeftButtonMediator, this.gameUi.leftButtonView);
	    this.mediators.create(RightButtonMediator, this.gameUi.rightButtonView);
	    this.mediators.create(ReelMediator, this.gameUi.reelView);
	  }
	});
	module.exports = StartApplication;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!./../node_modules/css-loader/index.js!./Background.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./Background.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	exports.push([module.id, "body {\n  background-color: #d0e4fe;\n}", ""]);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, textureButton, textureButtonDown, textureButtonOver, LeftButtonView;
	EventName = __webpack_require__(1);
	textureButton = PIXI.Texture.fromImage('_assets/button.png');
	textureButtonDown = PIXI.Texture.fromImage('_assets/buttonDown.png');
	textureButtonOver = PIXI.Texture.fromImage('_assets/buttonOver.png');
	LeftButtonView = (function(superclass){
	  var prototype = extend$((import$(LeftButtonView, superclass).displayName = 'LeftButtonView', LeftButtonView), superclass).prototype, constructor = LeftButtonView;
	  function LeftButtonView(){
	    LeftButtonView.superclass.call(this, textureButton);
	    this.buttonMode = true;
	    this.interactive = true;
	    this.on('mouseup', this.onButtonUp).on('touchend', this.onButtonUp).on('mouseupoutside', this.onButtonUp).on('touchendoutside', this.onButtonUp).on('mouseover', this.onButtonOver).on('mouseout', this.onButtonOut).on('mousedown', this.onButtonDownaa).on('touchstart', this.onButtonDownaa);
	  }
	  prototype.onButtonDownaa = function(){
	    this.texture = textureButtonDown;
	    this.emit(EventName.BUTTON_CLICK);
	  };
	  prototype.onButtonUp = function(){
	    this.isDown = false;
	    this.texture = this.isOver ? textureButtonOver : textureButton;
	  };
	  prototype.onButtonOver = function(){
	    this.isOver = true;
	    if (this.isDown) {
	      return;
	    }
	    this.texture = textureButtonOver;
	  };
	  prototype.onButtonOut = function(){
	    this.isOver = false;
	    if (this.isDown) {
	      return;
	    }
	    this.texture = textureButton;
	  };
	  return LeftButtonView;
	}(PIXI.Sprite));
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, RightButtonView;
	EventName = __webpack_require__(1);
	RightButtonView = (function(superclass){
	  var prototype = extend$((import$(RightButtonView, superclass).displayName = 'RightButtonView', RightButtonView), superclass).prototype, constructor = RightButtonView;
	  function RightButtonView(){
	    RightButtonView.superclass.call(this);
	    this.radius = 100;
	    this.lineStyle(0);
	    this.beginFill(0xFFFF08, 0.5);
	    this.drawCircle(this.radius / 2, this.radius / 2, this.radius / 2);
	    this.endFill();
	    this.buttonMode = true;
	    this.interactive = true;
	    this.on('mouseup', this.onButtonUp).on('touchend', this.onButtonUp).on('mouseupoutside', this.onButtonUp).on('touchendoutside', this.onButtonUp).on('mouseover', this.onButtonOver).on('mouseout', this.onButtonOut).on('mousedown', this.onButtonDownbb).on('touchstart', this.onButtonDownbb);
	  }
	  prototype.onButtonDownbb = function(){
	    this.clear();
	    this.lineStyle(0);
	    this.beginFill(0xFFFFFF, 0.5);
	    this.drawCircle(this.radius * 0.5, this.radius * 0.5, this.radius * 0.5);
	    this.endFill();
	    this.emit(EventName.BUTTON_CLICK);
	  };
	  prototype.onButtonUp = function(){
	    this.clear();
	    this.lineStyle(0);
	    this.beginFill(0xFFFFFF, 0.5);
	    this.drawCircle(this.radius * 0.5, this.radius * 0.5, this.radius * 0.5);
	    this.endFill();
	  };
	  prototype.onButtonOver = function(){
	    this.clear();
	    this.lineStyle(0);
	    this.beginFill(0xFFFFFF, 0.5);
	    this.drawCircle(this.radius * 0.5, this.radius * 0.5, this.radius * 0.5);
	    this.endFill();
	  };
	  prototype.onButtonOut = function(){
	    this.clear();
	    this.lineStyle(0);
	    this.beginFill(0xFFFF08, 0.5);
	    this.drawCircle(this.radius * 0.5, this.radius * 0.5, this.radius * 0.5);
	    this.endFill();
	  };
	  return RightButtonView;
	}(PIXI.Graphics));
	module.exports = RightButtonView;
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var ReelView;
	ReelView = (function(superclass){
	  var prototype = extend$((import$(ReelView, superclass).displayName = 'ReelView', ReelView), superclass).prototype, constructor = ReelView;
	  function ReelView(){
	    ReelView.superclass.call(this);
	    this.lineStyle(2, 0xFF00FF, 1);
	    this.beginFill(0xFF00BB, 0.25);
	    this.drawRoundedRect(0, 0, 600, 500, 10);
	    this.endFill();
	  }
	  prototype.resize = function(){
	    var width;
	    width = this.width === 100 ? 600 : 100;
	    TweenLite.to(this, 1.5, {
	      'width': width
	    });
	  };
	  return ReelView;
	}(PIXI.Graphics));
	module.exports = ReelView;
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

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, LeftButtonMediator;
	EventName = __webpack_require__(1);
	LeftButtonMediator = (function(){
	  LeftButtonMediator.displayName = 'LeftButtonMediator';
	  var prototype = LeftButtonMediator.prototype, constructor = LeftButtonMediator;
	  function LeftButtonMediator(target, dispatcher){
	    this.onButtonDown = bind$(this, 'onButtonDown', prototype);
	    this.target = target;
	    this.dispatcher = dispatcher;
	    this.target.on(EventName.BUTTON_CLICK, this.onButtonDown);
	  }
	  prototype.onButtonDown = function(){
	    this.dispatcher.dispatch(EventName.REEL_RESIZE);
	  };
	  return LeftButtonMediator;
	}());
	module.exports = LeftButtonMediator;
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, RightButtonView;
	EventName = __webpack_require__(1);
	RightButtonView = (function(){
	  RightButtonView.displayName = 'RightButtonView';
	  var prototype = RightButtonView.prototype, constructor = RightButtonView;
	  function RightButtonView(target, dispatcher){
	    this.onButtonDown = bind$(this, 'onButtonDown', prototype);
	    this.target = target;
	    this.dispatcher = dispatcher;
	    this.target.on(EventName.BUTTON_CLICK, this.onButtonDown);
	  }
	  prototype.onButtonDown = function(){
	    this.dispatcher.dispatch(EventName.REEL_RESIZE);
	  };
	  return RightButtonView;
	}());
	module.exports = RightButtonView;
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var EventName, ReelMediator;
	EventName = __webpack_require__(1);
	ReelMediator = (function(){
	  ReelMediator.displayName = 'ReelMediator';
	  var prototype = ReelMediator.prototype, constructor = ReelMediator;
	  function ReelMediator(target, dispatcher){
	    this.doResize = bind$(this, 'doResize', prototype);
	    this.target = target;
	    this.dispatcher = dispatcher;
	    this.dispatcher.addEventListener(EventName.REEL_RESIZE, this.doResize);
	  }
	  prototype.doResize = function(){
	    this.target.resize();
	  };
	  return ReelMediator;
	}());
	module.exports = ReelMediator;
	function bind$(obj, key, target){
	  return function(){ return (target || obj)[key].apply(obj, arguments) };
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	// 
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(var i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ]);