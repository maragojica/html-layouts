
$(document).ready(function() {
    $('select').niceSelect();
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 70) {
        $('#masthead').addClass('header-scrolled');
    } else {
        $('#masthead').removeClass('header-scrolled');
    }
});

