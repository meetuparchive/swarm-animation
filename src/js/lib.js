// dummy lib for now to get testing hooked up

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
