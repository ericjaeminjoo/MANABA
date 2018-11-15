require("normalize.css/normalize.css");
require("../styles/sponsors.scss");
require("../styles/spacing.scss");

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
});
