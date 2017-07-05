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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _swarmAnimation = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @description this code file is to make the doc examples work
	 * please add to this file with more examples
	 */

	(0, _jquery2.default)(function () {
		// animation fade example
		(0, _jquery2.default)('#fadeOutLink').on('click', function (e) {
			e.preventDefault();
			_swarmAnimation.swarmAnimation.hide(document.querySelector('.boxEl'));
		});

		// animation fade example
		(0, _jquery2.default)('#fadeInLink').on('click', function (e) {
			e.preventDefault();
			_swarmAnimation.swarmAnimation.show(document.querySelectorAll('.boxEl')[1]);
		});

		// Highlightjs - fancy tables parsed from markdown
		(0, _jquery2.default)('pre code').each(function (i, block) {
			hljs.highlightBlock(block); // eslint-disable-line no-undef
		});
	});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = jQuery;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// dummy lib for now to get testing hooked up

	/**
	 * @module swarmAnimation
	 * @description javascript functions to help animations, esp
	 * those responding to user interaction
	 * functions for applying css classes, doing transforms consistently
	 */

	var DURATION_TYPE = {
		short: 'short',
		medium: 'medium',
		long: 'long'
	};

	var swarmAnimation = {
		hide: function hide(el, durationType) {
			var transitionClass = 'anim-transition--opacity';
			if (durationType) {
				transitionClass = transitionClass + '--' + DURATION_TYPE[durationType];
			}
			el.classList.add(transitionClass, 'anim-opacity--0');
		},
		show: function show(el, durationType) {
			var transitionClass = 'anim-transition--opacity';
			if (durationType) {
				transitionClass = transitionClass + '--' + DURATION_TYPE[durationType];
			}
			el.classList.add(transitionClass, 'anim-opacity--1');
		}
	};

	exports.swarmAnimation = swarmAnimation;
	exports.DURATION_TYPE = DURATION_TYPE;

/***/ })
/******/ ]);