$(document).ready(function() {
    $('.owl-onecol-testimonials').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }

    });

});
$(document).ready(function() {
    $('.owl-fourcol-sponsor').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop: true,
        smartSpeed: 1000,
        autoplay:false,
        autoplayTimeout:8000,
        autoplayHoverPause:true,
        nav: true,
        navText : ["<i class='fa fa-angle-left animated fadeInRight'></i>","<i class='fa fa-angle-right animated fadeInLeft'></i>"],
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
                margin: 30
            }
        }

    });

});