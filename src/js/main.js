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
      prevArrow: '<i class="slick-prev to-prev"></i>',
      nextArrow: '<i class="slick-next to-next"></i>',
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
    cssEase: 'linear',
    draggable: true,
    autoplay: false,
    autoplayspeed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    swipe: true,
    prevArrow: '<i class="slick-prev to-prev"></i>',
    nextArrow: '<i class="slick-next to-next"></i>',
    dots: true,
    speed: 500,
    responsive: [{
      breakpoint: 1165,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });
  // .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  // then let's do this before changing slides
  // $('.tariffSlider .slider .slick-disabled').each(function() {
  // $(this).fadeIn();
  // });
  // $('.tariffSlider .slider .slick-arrow[aria-disabled="false"]').each(function() {
  // $(this).hide();
  // });
  // })
  // .on('afterChange', function(event, slick, currentSlide, nextSlide) {
  // finally let's do this after changing slides
  // });

  // $('.tariffSlider .slider .slick-prev').each(function() {
  //   $(this).hide();
  // });
  // $('.tariffSlider .slider .slick-prev').click(function() {
  //   $(this).hide();
  //   $('.tariffSlider .slider .slick-next').fadeIn();
  // });
  //
  // $('.tariffSlider .slider .slick-next').click(function() {
  //   $(this).hide();
  //   $('.tariffSlider .slider .slick-prev').fadeIn();
  // });

// TARIFFSCROLLED //
  $('.tariffScrolled').remove();
  // $(".tariffScrolled .scrolledBlock").mCustomScrollbar({
  //   theme: "customThm",
  //   set_width: "100%",
  //   axis: "x",
  //   mouseWheel: {
  //     axis: "x",
  //     enable: true
  //   },
  //   scrollButtons: {
  //     enable: true
  //   },
  //   keyboard: {
  //     enable: true
  //   },
  //   advanced: {
  //     updateOnContentResize: true, // <- the solution
  //     horizontalScroll: true,
  //   },
  //   documentTouchScroll: true,
  //   // contentTouchScroll: "integer"
  // });

  $(".scrollContainer .scrolled").mCustomScrollbar({
    theme: "customThm",
  });

  function srolledTop() {
    $(".scrollContainer .scrolled").mCustomScrollbar("scrollTo", "top", 0);
  }



  $(".CamBlock__list").mCustomScrollbar({
    theme: "CamListThm",
  });


  $("input,textarea,email").focus(function() {
    $(this).data("placeholder", $(this).attr("placeholder")), $(this).attr("placeholder", "")
  });

  $("input,textarea,email").blur(function() {
    $(this).attr("placeholder", $(this).data("placeholder"))
  });

  $('input[type="phone"]').inputmask("+7 (999) 999 99 99");

  $('.burger').click(function() {
    $(this).toggleClass('active');
    $('html').toggleClass('block');
    $('.header__mobileMenu').toggleClass('show');
    $('.topSlider .slider').slick("slickNext");
    srolledTop();
  });

  $('.header__mobileMenu ul li a').click(function() {
    $(this).next('ul').addClass('show');
    srolledTop();
  });
  $('.back').click(function() {
    $(this).parent().parent().removeClass('show');
    srolledTop();
  });
});

//# sourceMappingURL=main.js.map
