import { swarmAnimation, DURATION_TYPE } from '../../src/js/swarmAnimation';

describe('a first test boilerplate for swarmAnimation functions', function () {

	jasmine.getStyleFixtures().fixturesPath = '../../dist';
	loadStyleFixtures('animation.css'); // eslint-disable-line no-undef

	describe('opacity and fade tests', function() {

		describe('opacity classes', function() {
			let mainEl,
				elOpacity;

			beforeEach(() => {
				mainEl = document.createElement('div');
				document.body.appendChild(mainEl);
			});

			afterEach(() => {
				mainEl.remove();
				mainEl = null;
				elOpacity.remove();
				elOpacity = null;
			});

			it('class gives proper opacity 1', function () {
				mainEl.insertAdjacentHTML('beforeend', '<div id="elOpacity" class="anim-opacity--1"></div>');
				elOpacity = document.querySelector('#elOpacity');
				const opacity = window.getComputedStyle(elOpacity).getPropertyValue('opacity');
				expect(opacity).toBe('1');
			});
		});

		describe('opacity classes', function() {
			let mainEl,
				elOpacity;

			beforeEach(() => {
				mainEl = document.createElement('div');
				document.body.appendChild(mainEl);
			});

			afterEach(() => {
				mainEl.remove();
				mainEl = null;
				elOpacity.remove();
				elOpacity = null;
			});

			it('class gives proper opacity 0', function () {
				mainEl.insertAdjacentHTML('beforeend', '<div id="elOpacity" class="anim-opacity--0"></div>');
				elOpacity = document.querySelector('#elOpacity');
				const opacity = window.getComputedStyle(elOpacity).getPropertyValue('opacity');
				expect(opacity).toBe('0');
			});

			/*
			it('class gives proper opacity', function () {
				el.className = 'anim-opacity--1';
				const opacity = window.getComputedStyle(el).getPropertyValue('opacity');
				expect(opacity).toBe('1');
			});
			*/

			it('class gives proper opacity 0 >>>', function () {
				setFixtures('<div id="elYo" class="anim-opacity--0"></div>');// eslint-disable-line no-undef
				console.log(elOpacity);
				elOpacity = document.querySelector('#elYo');
				const opacity = window.getComputedStyle(elOpacity).getPropertyValue('opacity');

				const x = $(elOpacity).css('opacity'); // eslint-disable-line no-undef
				console.log('heyyy css opacity value', x);

				expect(opacity).toBe('0');
				// $(mainEl).append('<div id="elOpacity" class="anim-opacity--0"></div>');
				/*
				mainEl.insertAdjacentHTML('beforeend', '<div id="elOpacity" class="anim-opacity--0"></div>');
				elOpacity = document.querySelector('#elOpacity');

				const opacity = window.getComputedStyle(elOpacity).getPropertyValue('opacity');
				console.log(elOpacity, elOpacity.className);
				expect(opacity).toBe('0');*/
			});
		});

		describe('hide', function() {

			let el;

			beforeEach(() => {
				el = document.createElement('div');
				document.body.appendChild(el);
			});

			afterEach(() => {
				el.remove();
				el = null;
			});

			it('hide applies proper class', function() {
				swarmAnimation.hide(el);
				expect(el.classList.contains('anim-fade--out')).toBe(true);
			});

			it('hide applies proper class with specified short duration', function () {
				swarmAnimation.hide(el, DURATION_TYPE.short);
				expect(el.classList.contains('anim-fade-short--out')).toBe(true);
			});
		});

		describe('show', function() {

			let el;

			beforeEach(() => {
				el = document.createElement('div');
				document.body.appendChild(el);
			});

			afterEach(() => {
				el.remove();
				el = null;
			});

			it('show applies proper class', function() {
				swarmAnimation.show(el);
				expect(el.classList.contains('anim-fade--in')).toBe(true);
			});

			it('hide applies proper class with specified short duration', function () {
				swarmAnimation.show(el, DURATION_TYPE.short);
				expect(el.classList.contains('anim-fade-short--in')).toBe(true);
			});
		});
	});
});
