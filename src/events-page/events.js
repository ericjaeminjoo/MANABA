require("normalize.css/normalize.css");
require("../styles/events.scss");
require("../styles/spacing.scss");

$(document).ready(function () {
    // Navbar JS
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});
