window.onload = function () {
    setUpProgressBarsAutoScroll();
    verifyIfIsLoggedIn();
}

function verifyIfIsLoggedIn() {
    if (localStorage["isLoggedIn"]) {
        $('#isLoggedIn').show();
        $('#isLoggedOut').hide();
    } else {
        $('#isLoggedIn').hide();
        $('#isLoggedOut').show();
    }
}

function setUpProgressBarsAutoScroll() {
    //binds a scroll detect to the progress bar divs
    //loads the progressbar width to 80% once scrolling reaches
    //then unbinds the scroll detect
    if ($('.progress-bar').length < 1) {
        return;
    }

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('.progress-bar').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.progress-bar').css('width', '80%').attr('aria-valuenow', 80);
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });

    ///
    if ($('.progress-bar-grey').length < 1) {
        return;
    }

    $(document).bind('scroll', function (ev) {
        var scrollOffset = $(document).scrollTop();
        var containerOffset = $('.progress-bar-grey').offset().top - window.innerHeight;
        if (scrollOffset > containerOffset) {
            $('.progress-bar-grey').css('width', '100%').attr('aria-valuenow', 100);
            // unbind event not to load scrolsl again
            $(document).unbind('scroll');
        }
    });
}