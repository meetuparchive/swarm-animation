// dummy lib for now to get testing hooked up

const swarmAnimation = {
	hide(el) {
		el.classNames += ' anim-fade--out';
	},

	show(el) {
		el.classNames += ' anim-fade--in';
	},

	addOneTest(x) {
		return ++x;
	}
};

export default swarmAnimation;
