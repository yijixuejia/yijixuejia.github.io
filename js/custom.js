!(function($) {
  "use strict";
  
  // Carousel
  var sliderCarousel = $("#sliderCarousel");
  var sliderCarouselIndicators = $("#slider-carousel-indicators");
  sliderCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    sliderCarouselIndicators.append("<li data-target='#sliderCarousel' data-slide-to='" + index + "' class='active'></li>"):
      sliderCarouselIndicators.append("<li data-target='#sliderCarousel' data-slide-to='" + index + "'></li>");
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });


})(jQuery);