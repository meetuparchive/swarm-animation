import { swarmAnimation, DURATION_TYPE } from '../../src/js/swarmAnimation';

describe('a first test boilerplate for swarmAnimation functions', function () {

	jasmine.getStyleFixtures().fixturesPath = '../../dist';

	describe('opacity and fade tests', function() {

		const opacityClass0 = 'opacity--0';
		const opacityClass1 = 'opacity--1';
		const transitionClassEnter = 'trans-opacity--enter';
		const transitionClassExit = 'trans-opacity--exit';

		describe('opacity classes', function() {

			let el;

			beforeEach(() => {
				loadStyleFixtures('animation.css'); // eslint-disable-line no-undef
				el = document.createElement('div');
				document.body.appendChild(el);
			});

			afterEach(() => {
				el.remove();
				el = null;
			});

			it('class gives proper opacity 0', function () {
				el.className = opacityClass0;
				const opacity = window.getComputedStyle(el).getPropertyValue('opacity');
				expect(opacity).toBe('0');
			});

			it('class gives proper opacity 1', function () {
				el.className = opacityClass1;
				const opacity = window.getComputedStyle(el).getPropertyValue('opacity');
				expect(opacity).toBe('1');
			});

		});

		describe('show & hide fns', function() {

			let el;

			beforeEach(() => {
				loadStyleFixtures('animation.css'); // eslint-disable-line no-undef
				el = document.createElement('div');
				document.body.appendChild(el);
			});

			afterEach(() => {
				el.remove();
				el = null;
			});

			it('hide applies proper class', function() {
				swarmAnimation.hide(el);
				expect(el.classList.contains(transitionClassExit)).toBe(true);
				expect(el.classList.contains(opacityClass0)).toBe(true);
			});

			it('hide applies proper class with specified short duration', function () {
				swarmAnimation.hide(el, DURATION_TYPE.short);
				expect(el.classList.contains(`${transitionClassExit}--${DURATION_TYPE.short}`)).toBe(true);
				expect(el.classList.contains(opacityClass0)).toBe(true);
			});

			it('show applies proper class', function() {
				swarmAnimation.show(el);
				expect(el.classList.contains(transitionClassEnter)).toBe(true);
				expect(el.classList.contains(opacityClass1)).toBe(true);
			});

			it('show applies proper class with specified short duration', function () {
				swarmAnimation.show(el, DURATION_TYPE.short);
				expect(el.classList.contains(`${transitionClassEnter}--${DURATION_TYPE.short}`)).toBe(true);
				expect(el.classList.contains(opacityClass1)).toBe(true);
			});
		});
	});
});
