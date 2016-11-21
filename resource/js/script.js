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

    $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 340) {
        $('#intro-container nav').attr('id' , 'fixed');
    } else {
        $('#intro-container nav').removeAttr('id');
    }
    });
});
