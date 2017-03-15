import $ from 'jquery';
import swarmAnimation from '../../../src/js/lib';


/**
 * @description this code file is to make the doc examples work
 * please add to this file with more examples
 */

$(function() {
	// animation fade example
	$('#fadeOutLink').on('click', function(e) {
		e.preventDefault();
		swarmAnimation.hide(document.querySelector('.animateEl'));
	});
});


// $(function() {
	// // Highlightjs - fancy tables parsed from markdown
	// [> $(document).ready(function() { <]
		// // $('pre code').each(function(i, block) {
			// // hljs.highlightBlock(block);
		// // });
		// // $('.doc_block-desc > table').addClass('stripedTable');
	// // });

	// // Disable links without real href
	// $('a').on('click', function(e) {
		// if (this.getAttribute('href') == '#' || $(this).hasClass('noFollow')) {
			// e.preventDefault();
		// }
		// return;
	// });

// });

