require("normalize.css/normalize.css");
require("../styles/home.scss");
require("../styles/spacing.scss");
require("../../node_modules/counterup/jquery.counterup.min.js");
require("../../node_modules/waypoints/lib/jquery.waypoints.min.js");
var bulmaAccordion = require("../../node_modules/bulma-accordion/dist/js/bulma-accordion.min.js");

$(document).ready(function () {
    // Initiate wowjs for animate on scroll
    new WOW().init();

    // Arrow down decrease opacity as user scrolls down
    $(window).scroll(function () {
        $("#arrow-down").css("opacity", 1 - $(window).scrollTop() / 650);
        if ($(this).scrollTop() < 65) {
            $("#back-to-top").fadeOut();
        } else {
            $("#back-to-top").fadeIn();
        }
    });

    // accordions now contains an array of all Accordion instances
    var accordions = bulmaAccordion.attach();

    // Navbar JS
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});

// Counter function for number values
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 7500
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
