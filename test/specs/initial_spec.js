import { swarmAnimation, DURATION_TYPE } from '../../src/js/swarmAnimation';

describe('a first test boilerplate for swarmAnimation functions', function () {

	jasmine.getStyleFixtures().fixturesPath = '../../dist';

	describe('opacity and fade tests', function() {

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
				el.className = 'anim-opacity--0';
				const opacity = window.getComputedStyle(el).getPropertyValue('opacity');
				expect(opacity).toBe('0');
			});

			it('class gives proper opacity 1', function () {
				el.className = 'anim-opacity--1';
				const opacity = window.getComputedStyle(el).getPropertyValue('opacity');
				expect(opacity).toBe('1');
			});

		});

		describe('hide fn', function() {

			let el;

			beforeEach(() => {
				jasmine.clock().install();
				loadStyleFixtures('animation.css'); // eslint-disable-line no-undef
				el = document.createElement('div');
				document.body.appendChild(el);
			});

			afterEach(() => {
				jasmine.clock().uninstall();
				el.remove();
				el = null;
			});

			it('hide applies proper class', function() {
				swarmAnimation.hide(el);
				expect(el.classList.contains('anim-fade--out')).toBe(true);
			});

			it('hide applies proper class with specified short duration', function () {
				swarmAnimation.hide(el, DURATION_TYPE.short);
				expect(el.classList.contains('anim-fade--out--short')).toBe(true);
			});
		});

		describe('show fn', function() {

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

			it('show applies proper class', function() {
				el.className = 'anim-opacity--0';
				swarmAnimation.show(el);
				expect(el.classList.contains('anim-fade--in')).toBe(true);
			});

			it('show applies proper class with specified short duration', function () {
				swarmAnimation.show(el, DURATION_TYPE.short);
				expect(el.classList.contains('anim-fade--in--short')).toBe(true);
			});
		});
	});
});
