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

	// // collapsible example
	// const $c = $('#cContainer'),
		// CLASS_COL_CLOSE = 'collapsible--close';
	// if ($c.length > 0) {
		// $('#cTrigger').on('click', function() {
			// if ($c.hasClass(CLASS_COL_CLOSE) ) {
				// $c.removeClass(CLASS_COL_CLOSE);
			// } else {
				// $c.addClass(CLASS_COL_CLOSE);
			// }
		// });
	// }


// });

