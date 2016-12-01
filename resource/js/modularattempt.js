var script = (function(){

    //cache DOM
    var $navList = $('#intro-container nav ul')
    var $icon = $('#mobile-nav-icon i')
    var $window = $(window)
    var $portfolio = $('#portfolio-container')

    //bind events
    $icon.on('click', toggleNav)
    $window.on('resize', responsiveNavResize)
    RunMagnificPopup($portfolio);
    // nothing needs to be rendered for now
    // _render()
    //
    // function _render(){
    // }

    function toggleNav(){
        $navList.toggle()
        if ($icon.hasClass('fa fa-bars')) {
            $icon.removeClass('fa fa-bars')
                .addClass('fa fa-times')
        } else {
            $icon.removeClass('fa fa-times')
                .addClass('fa fa-bars')
        }
    }

    function responsiveNavResize(){
        var w = $window.width();
        if (w > 800 && $navList.is(':hidden')) {
            $navList.removeAttr('style');
        }
    }

    function RunMagnificPopup(images){
        images.magnificPopup({
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
        })
    }
})()
