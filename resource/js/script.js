$(document).ready(function() {
    $('#mobile-nav-icon').click(function(){
        var navList = $('#intro-container nav ul');
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

    $(window).resize(function() {
        var w = $(window).width();
        var menu = $('#intro-container nav ul');
        if (w > 800 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
});
