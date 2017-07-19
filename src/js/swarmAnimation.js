// dummy lib for now to get testing hooked up

/**
 * @module swarmAnimation
 * @description javascript functions to help animations, esp
 * those responding to user interaction
 * functions for applying css classes, doing transforms consistently
 */

const DURATION_TYPE = {
	short: 'short',
	medium: 'medium',
	long: 'long'
};

const swarmAnimation = {
	hide(el, durationType) {
		let transitionClass = 'trans-fadeOut';
		if (durationType) {
			transitionClass = `${transitionClass}--${DURATION_TYPE[durationType]}`;
		}
		el.classList.add(transitionClass, 'opacity--0');
	},

	show(el, durationType) {
		let transitionClass = 'trans-fadeIn';
		if (durationType) {
			transitionClass = `${transitionClass}--${DURATION_TYPE[durationType]}`;
		}
		el.classList.add(transitionClass, 'opacity--1');
	}
};

export { swarmAnimation, DURATION_TYPE };
