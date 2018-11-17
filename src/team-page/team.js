require("normalize.css/normalize.css");
require("../styles/team.scss");
require("../styles/spacing.scss");

$(window).on('load', function () {
    // Arrow down decrease opacity as user scrolls down
    $(window).scroll(function () {
        if ($(this).scrollTop() < 65) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });
});

$(function () {
    $('.description-content').hide();
    $('.card-content').hover(function () {
        $(this).children('.description-content').stop().slideDown();
    }, function () {
        // slides children up
        $(this).children('.description-content').stop().slideUp();
    })
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
