$(document).ready(function () {
    //Sticky Navigation
    $(".js--section-features").waypoint(function (direction) {
        if (direction === "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px"
    });

    $('.js--scroll-to-plans').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });
    $('.js--scroll-to-start').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    $('.js--nav-delivery').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });
    $('.js--nav-steps').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-steps').offset().top
        }, 1000);
    });
    $('.js--nav-cities').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-cities').offset().top
        }, 1000);
    });
    $('.js--nav-sign-up').click(function () {
        $('html,body').animate({
            scrollTop: $('.js--section-form').offset().top
        }, 1000);
    });
});