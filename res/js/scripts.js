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
//    Animation on scroll
    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {offset: "50%"});

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {offset: '50%'});

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeInUp');
    }, {offset: '50%'});

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {offset: '35%'});

//    Mobile Navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        nav.slideToggle(200);
        if (icon.attr('name') === 'reorder-three') {
            icon.attr('name', 'close');
        } else {
            icon.attr('name', 'reorder-three');
        }

    });
});