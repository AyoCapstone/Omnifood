$(document).ready(function() {
    
    /* For Sticky nav */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
               $('nav').addClass('sticky');
        } else {
               $('nav').removeClass('sticky');
            }
    }, {
      offset: '60px;'
    });
    
    /* For Scroll on button */
    
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top}, 1000
        );
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top}, 1000
        );
    });
    
    /* Navigation Scroll */
    
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    /*
    // Scroll to specific values
    // scrollTo is the same
    window.scroll({
      top: 2500, 
      left: 0, 
      behavior: 'smooth' 
    });

    // Scroll certain amounts from current position 
    window.scrollBy({ 
      top: 100, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });

    // Scroll to a certain element
    document.querySelector('.hello').scrollIntoView({ 
      behavior: 'smooth' 
    });
    */
    
    /* Animations on Scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /*----- MOBILE NAV -----*/
    /* Note: Don't ad . when defining the classes for icons */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        }
        else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }
    });

    
    /*----- MAPS -----*/
    var map = new GMaps({
      div: '.map',
      lat: 6.5479971,
      lng: 3.05,
      zoom: 11
    });
    
    map.addMarker({
      lat: 6.5479971,
      lng: 3.1173043,
      title: 'Lima',
      infoWindow: {
        content: '<p>Our Lagos Headquarters</p>'
      }
    });

});


