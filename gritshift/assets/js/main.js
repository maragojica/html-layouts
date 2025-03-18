function myFunction(countcate) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("viewAll");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See all "+countcate+" categories <i class='fas fa-caret-down'></i>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "See less categories <i class='fas fa-caret-up'></i>";
        moreText.style.display = "inline";
    }
}

$(document).ready(function() {
    $('select').niceSelect();
});
$(document).ready(function() {
    $('.owl-popular').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav: true,
        navText : ["<i class='fas fa-chevron-left animated fadeInRight'></i>","<i class='fas fa-chevron-right animated fadeInLeft'></i>"],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
                margin: 15
            },
            768: {
                items: 5,
                margin: 20
            },
            1000: {
                items: 5,
                margin: 30
            }
        }

    });

});
$(document).ready(function() {
    $('.owl-related-post').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav: true,
        navText : ["<i class='fas fa-chevron-left animated fadeInRight'></i>","<i class='fas fa-chevron-right animated fadeInLeft'></i>"],
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 15
            },
            768: {
                items: 3,
                margin: 20
            },
            1000: {
                items: 4,
                margin: 20
            }
        }

    });

});

$(document).ready(function() {
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
        var x = document.getElementById("icon-password");
        if (x.innerHTML === "Show") {
            x.innerHTML = "Hide";
        } else {
            x.innerHTML = "Show";
        }
    });
    $(".toggle-password-2").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
        var x = document.getElementById("icon-password-resgister");
        if (x.innerHTML === "Show") {
            x.innerHTML = "Hide";
        } else {
            x.innerHTML = "Show";
        }
    });

    $('.menu-desktop').css('visibility','visible');
    $('.menu-mobile').css('visibility','visible');
    $('#mobile-navbar').css('visibility','visible');
});