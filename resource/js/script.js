$(document).ready(function() {
    //menu toggling for mobile
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

    //for loop to easily add all photos
    for(i=1;i<=20;i++) {
        $('#portfolio-container section').append
            ('<a href="resource/img/amanda/' + i + '.jpg"><img src="resource/img/amanda/' + i + '.jpg"></a>');
    };

    //nav responds properly when resizing from mobile to desktop screen size
    $(window).resize(function() {
        var w = $(window).width();
        var menu = $('#intro-container nav ul');
        if (w > 800 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('#portfolio-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',

        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
});
