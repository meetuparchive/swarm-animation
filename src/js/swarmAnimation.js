// dummy lib for now to get testing hooked up

/**
 * @module swarmAnimation
 * @description javascript functions to help animations, esp
 * those responding to user interaction
 * functions for applying css classes, doing transforms consistently
 */

const swarmAnimation = {
	hide(el) {
		el.classList += ' anim-fade--out';
	},

	show(el) {
		el.classList += ' anim-fade--in';
	},

	addOneTest(x) {
		return ++x;
	}
};

export default swarmAnimation;
