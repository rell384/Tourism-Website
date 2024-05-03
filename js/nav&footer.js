
$(document).ready(function () {
    var navbar = $(".navbar");
    var offset = navbar.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() > offset) {
            navbar.addClass("fixed-top");
        } else {
            navbar.removeClass("fixed-top");
        }
    });
});