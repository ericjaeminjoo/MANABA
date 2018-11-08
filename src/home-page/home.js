require("normalize.css/normalize.css");
require("../styles/home.scss");
require("../styles/spacing.scss");
require("../../node_modules/counterup/jquery.counterup.min.js");
require("../../node_modules/waypoints/lib/jquery.waypoints.min.js");

$(document).ready(function () {
    // Initiate wowjs for animate on scroll
    new WOW().init();

    $(window).scroll(function () {
        $("#arrow-down").css("opacity", 1 - $(window).scrollTop() / 650);
    });
});

/*=====================================================
				   Counter
======================================================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 7500
    });
});
