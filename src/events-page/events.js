require("normalize.css/normalize.css");
require("../styles/events.scss");
require("../styles/spacing.scss");

$(document).ready(function () {
    $("#showModal").click(function () {
        console.log("AHHHHHHHHH");
        $(".modal").addClass("is-active");
    });

    $(".modal-close").click(function () {
        $(".modal").removeClass("is-active");
    });
});
