import $ from 'jquery';
import { swarmAnimation } from '../../../src/js/swarmAnimation';

/**
 * @description this code file is to make the doc examples work
 * please add to this file with more examples
 */

$(function() {
	// animation fade example
	$('#fadeOutLink').on('click', function(e) {
		e.preventDefault();
		swarmAnimation.hide(document.querySelector('.boxEl'));
	});

	// animation fade example
	$('#fadeInLink').on('click', function(e) {
		e.preventDefault();
		swarmAnimation.show(document.querySelectorAll('.boxEl')[1]);
	});

	// Highlightjs - fancy tables parsed from markdown
	$('pre code').each(function(i, block) {
		hljs.highlightBlock(block); // eslint-disable-line no-undef
	});

});

