
$(document).ready(function() {
      $(document).mousemove(function( event ) {
            if ($("body").height() > $(window).height()) {
            $('.footer').removeClass('fixed');
            }
            else {
            $('.footer').addClass('fixed')
            }

      });

    // Check if body height is higher than window height :)


});
