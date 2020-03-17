'use strict';

$(document).ready(function() {

  $('.slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    cssEase: 'ease-in-out',
    draggable: true,
    autoplay: true,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    speed: 250,
    autoplayspeed: 2500,
    fade: true,

  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    // then let's do this before changing slides
    $('.topSlider .slick-active').each(function () {
      var imgURL = $(this).find('img').attr('src');
      $('.topSlider__backGround').attr('src',imgURL);
    });
  })
  .on('afterChange', function(event, slick, currentSlide, nextSlide) {
    // finally let's do this after changing slides
    $('.topSlider .slick-active').each(function () {
      var imgURL = $(this).find('img').attr('src');
      $('.topSlider__backGround').attr('src',imgURL);
    });
  });

  $('.topSlider .slick-active').each(function() {
    var bgSrc = $(this).find('img').attr('src');
    $('.topSlider__backGround').attr('src',bgSrc);
    console.log(bgSrc)
  });

});

//# sourceMappingURL=main.js.map
