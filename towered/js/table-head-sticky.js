var chartTable   = $('table.table-head-sticky'),
		chartWrapper = chartTable.parent(),
		chartWidth  = chartTable.width(),
		chartHeight = chartTable.height();

		/* This could be tweaked further so that it makes the chart only as wide
		   as the viewport if smaller than the page width. */
		function sizeChart() {
			/* First, make the wrapper no wider than the page. Start by hiding the
		     chart so it can't push out the page width, but fix the height of the
		     wrapper temporarily so things don't bounce around. Then measure the
		     width of the wrapper without the chart, which should fill the width of
		     its container. Set this value as the wrapper's max-width, then show
		     the chart again and unset the wrapper height. Only show the scrollbars
		     if necssary. */
			chartWrapper.css({
				height   : chartWrapper.height(),
				maxWidth : ''
			});
			chartTable.hide();
			var maxWidth = chartWrapper.width();
			chartWrapper.css({
				maxWidth  : maxWidth,
				height    : '',
				overflowX : chartWidth > maxWidth ? 'auto' : 'visible'
			});
			chartTable.show();

			/* Next, make the wrapper no taller than the viewport. Do this by measuring
		     the height of the viewport, then subtracting the offset of the first row
		     (not header, which we assume is sticky). Only show the scrollbars if
		     necessary. */
			var viewportHeight = $(window).height(), //same as document.documentElement.clientHeight
					firstRowOffset = chartTable.find('td:first')[0].getBoundingClientRect().top || 0;
			if (firstRowOffset > viewportHeight) {
				// chart is off the bottom of the screen, so no need for maxHeight
				maxHeight = '';
			} else if (firstRowOffset < 0) {
				// top of chart is off the top of the screen, so make the chart the same
		    // height as the viewport
				maxHeight = viewportHeight;
			} else {
				// chart is on screen, so make it fit entirely within the viewport, but no
		    // less than 150px high
				maxHeight = Math.max(viewportHeight - firstRowOffset, 150);
			}
			chartWrapper.css({
				maxHeight : maxHeight,
				overflowY : chartHeight > maxHeight ? 'auto' : 'visible'
			});
		}

		// Now run it, but not too often.
		// Consider also adding a textresize event: https://github.com/jney/jquery-textresize-event
		$(window).on('load resize scroll',$.throttle(1000, sizeChart));