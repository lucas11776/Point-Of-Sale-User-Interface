(function($) {

    // document fully loaded
    $(document).ready(function() {
        resize();
    });

    // device window resize
    $(window).resize(function() {
        resize();
    });
    
    function resize() {
        resizePosWindow();
        resizePosNavigation();
    }

    /**
     * Resize pos content,navigation windows to fit screen size.
     */
    var resizePosWindow = function() {
        var windowElem = $(window), documentElem = $(document), navbarElem = $('nav.navbar'), footerElem = $('footer');
        var posWindows = $('#pos-view, .pos-view-scroller, #pos-navigation');

        var height = windowElem.height() - (navbarElem.height() + footerElem.height());

        posWindows.css('height', height);

        posWindows.height(Math.abs(posWindows.height() - Math.abs(documentElem.height() - windowElem.height())))
    }

    /**
     * Resize pos navigation menu content.
     */
    var resizePosNavigation = function() {
        var header = $('#pos-navigation .add-customer'), body = $('#pos-navigation .purchase-items'),
            footer = $('#pos-navigation .checkout-menu'), navigationElem = $('#pos-navigation');

        body.height(navigationElem.height() - (header.height() + footer.height()))    
    }

    
}(jQuery));