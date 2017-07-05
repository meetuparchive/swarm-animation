import swarmAnimation from '../../src/js/swarmAnimation';

describe('a first test boilerplate for swarmAnimation functions', function () {

	let el;

	beforeEach(() => {
		el = document.createElement('div');
		document.body.appendChild(el);
	});

	afterEach(() => {
		el.remove();
		el = null;
	});

	it('adds one to a given number (dummy test)', function () {
		expect(swarmAnimation.addOneTest(1)).toEqual(2);
	});

	it('hides an element', function () {
		expect(window.getComputedStyle(el, null).getPropertyValue('opacity')).toBe('1');
		swarmAnimation.hide(el);
		expect(el.classList.contains('anim-fade--out')).toBe(true);
		// need to figure out how to check once animation is run
		// expect(window.getComputedStyle(el, null).getPropertyValue('opacity')).toBe('0');
	});
});
