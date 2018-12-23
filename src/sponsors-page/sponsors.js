require("normalize.css/normalize.css");
require("../styles/sponsors.scss");
require("../styles/spacing.scss");

$(document).ready(function() {
    // Navbar JS
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});


$(window).on('load', function() {
    // init Isotope
    var $grid = $('.grid').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
        $('.filter-button-group').find('.active').removeClass('active');
        $(this).addClass('active');
    });

    // Arrow down decrease opacity as user scrolls down
    $(window).scroll(function () {
        if ($(this).scrollTop() < 65) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });
});

// Smooth scrolling
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top
        }, 1200, "easeInOutExpo");
    });
});
