window.onload = function() {
	//binds a scroll detect to the progress bar divs
	//loads the progressbar width to 80% once scrolling reaches
	//then unbinds the scroll detect
	$(document).bind('scroll', function(ev) {
		var scrollOffset = $(document).scrollTop();
		var containerOffset = $('.progress-bar').offset().top - window.innerHeight;
		if (scrollOffset > containerOffset) {
			$('.progress-bar').css('width', '80%').attr('aria-valuenow', 80);
			// unbind event not to load scrolsl again
			$(document).unbind('scroll');
		}
	});
}