(function ($) {

    "use strict";

        // PRE LOADER
        $(window).load(function(){
          $('.preloader').delay(500).slideUp('slow'); // set duration in brackets    
        });


        // MENU
        $('.navbar-collapse a').on('click',function(){
          $(".navbar-collapse").collapse('hide');
        });

        $('.main-navigation').onePageNav({
          scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
          scrollOffset: 75, //Height of Navigation Bar
          filter: ':not(.external)',
          changeHash: true
        }); 

        /* MENU VISIBLE ON SCROLL */
        mainNav();
        $(window).scroll(function () {
            mainNav();
        });

        function mainNav() {
          var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
          if (top > 40) $('.sticky-navigation').stop().animate({
              "opacity": '1',
              "top": '0'
          });
          else $('.sticky-navigation').stop().animate({
              "opacity": '0',
              "top": '-75'
          });
        }


        // PARALLAX JS
        $('.parallax-section').each(function(){ 
          jQuery(this).parallax("30%", 0.1);  
        });


        // CONTACT FORM
        $("#contact").submit(function (e) {
          e.preventDefault();
          var name = $("#cf-name").val();
          var email = $("#cf-email").val();
          var subject = $("#cf-subject").val();
          var message = $("#cf-message").val();
          var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

          function isValidEmail(emailAddress) {
              var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
              return pattern.test(emailAddress);
          };
          if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
              $.ajax({
                  type: "POST",
                  url: "php/contact.php",
                  data: dataString,
                  success: function () {
                      $('.text-success').fadeIn(1000);
                      $('.text-danger').fadeOut(500);
                  }
              });
          }
          else {
              $('.text-danger').fadeIn(1000);
              $('.text-success').fadeOut(500);
          }
          return false;
        });


        // OWL TESTIMONIAL
        var owl = $("#owl-testimonial");
          owl.owlCarousel({
            autoPlay: 6000,
            items : 1,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1],
            itemsTablet: [768,1],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            Speedfast: 200,
        });


        // SMOOTHSCROLL
        $(function() {
          $('.navbar-default a, #home a, #about a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 40
            }, 1000);
            event.preventDefault();
          });
        }); 

})(jQuery);
