'use strict';

$(document).ready(function() {

  $('.topSlider .slider').slick({
      infinite: true,
      centerMode: true,
      centerPadding: '0',
      cssEase: 'ease-in-out',
      draggable: true,
      autoplay: false,
      autoplayspeed: 2500,
      slidesToShow: 1,
      slideToScroll: 1,
      speed: 250,
      arrows: false,
      prevArrow: '<i class="slick-prev icofont-square-right"></i>',
      nextArrow: '<i class="slick-next icofont-square-left"></i>',
      dots: true,
      // fade: true,

    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      // then let's do this before changing slides
      $('.topSlider .slick-active').each(function() {
        var imgURL = $(this).find('img').attr('src');
        $('.topSlider__backGround').attr('src', imgURL);
      });
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
      // finally let's do this after changing slides
      $('.topSlider .slick-active').each(function() {
        var imgURL = $(this).find('img').attr('src');
        $('.topSlider__backGround').attr('src', imgURL);
      });
    });

  $('.topSlider .slick-active').each(function() {
    var bgSrc = $(this).find('img').attr('src');
    $('.topSlider__backGround').attr('src', bgSrc);
    // console.log(bgSrc)
  });

  $('.tariffSlider .slider').slick({
      infinite: false,
      centerMode: false,
      centerPadding: '0',
      cssEase: 'ease-in-out',
      draggable: false,
      autoplay: false,
      autoplayspeed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: true,
      prevArrow: '<i class="slick-prev icofont-square-right"></i>',
      nextArrow: '<i class="slick-next icofont-square-left"></i>',
      dots: false,
      speed: 1000,
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      // then let's do this before changing slides
      $('.tariffSlider .slider .slick-disabled').each(function() {
        $(this).fadeIn();
      });
      $('.tariffSlider .slider .slick-arrow[aria-disabled="false"]').each(function() {
        $(this).hide();
      });
    })
    .on('afterChange', function(event, slick, currentSlide, nextSlide) {
      // finally let's do this after changing slides
    });

  $('.tariffSlider .slider .slick-prev').each(function() {
    $(this).hide();
  });
  $('.tariffSlider .slider .slick-prev').click(function() {
    $(this).hide();
    $('.tariffSlider .slider .slick-next').fadeIn();
  });

  $('.tariffSlider .slider .slick-next').click(function() {
    $(this).hide();
    $('.tariffSlider .slider .slick-prev').fadeIn();
  });

});

//# sourceMappingURL=main.js.map
