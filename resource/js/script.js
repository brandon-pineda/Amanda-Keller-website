$(document).ready(function() {
    $('#mobile-nav-icon').click(function(){
        var navList = $('#navbar li');
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
});
