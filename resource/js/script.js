$(document).ready(function() {
    $('#mobile-nav-icon').click(function(){
        var navList = $('#intro-container nav li');
        var icon = $('#mobile-nav-icon i');

        navList.toggle();

        if (icon.hasClass('fa fa-bars')) {
            icon.removeClass('fa fa-bars');
            icon.addClass('fa fa-times');
        } else {
            icon.removeClass('fa fa-times');
            icon.addClass('fa fa-bars');
            }
    });

    for(i=1;i<=20;i++) {
        $('#portfolio-container').append('<img src="resource/img/amanda/' + i + '.jpg">');
    };

    var position = $('#intro-container nav').css('position');
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 340) {
            $('#intro-container nav').addClass('fixed');
            $('#intro-container nav').css('position', 'fixed');
        } else {
            $('#intro-container nav').removeClass('fixed');
            $('#intro-container nav').css('position', position);

        }
    });

    $(window).resize(function() {
        var w = $(window).width();
        var menu = $('#intro-container nav li');
        if (w > 800 && menu.is(':hidden')) {
            menu.css('display','block');
            $('#intro-container nav li').css('display', 'inline');
        } else if (w < 800 && menu.is(':visible'))  {
            // menu.css('display','none');
            $('#intro-container nav li').css('display', 'none');
        }
    });
});
