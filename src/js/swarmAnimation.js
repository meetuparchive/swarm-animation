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
		let className = 'anim-fade--out';
		if (durationType) {
			className = `${className}--${DURATION_TYPE[durationType]}`;
		}
		el.classList.add(className);
	},

	show(el, durationType) {
		let className = 'anim-fade--in';
		if (durationType) {
			className = `${className}--${DURATION_TYPE[durationType]}`;
		}
		el.classList.add(className);
	}
};

export { swarmAnimation, DURATION_TYPE };
