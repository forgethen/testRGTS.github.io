'use strict';

$(document).ready(function() {

  setTimeout(function() {
    $('a[data-online="online"]').addClass('online');
  }, 100);

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
      }
    ]
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

  $('input[type="tel"]').inputmask("+7 (999) 999 99 99");
  $('input[pattern="[0-9]"]').inputmask("9{0,5}");

  $('.burger').click(function() {
    // $(this).toggleClass('active');
    $(this).hide();
    $('html').toggleClass('block');
    $('.header__mobileMenu').toggleClass('show');
    $('.topSlider .slider').slick("slickNext");
    srolledTop();
    $('.overlay').show();
  });

  $('.header__mobileMenu .close').click(function() {
    $('.burger').fadeIn();

    $('html').toggleClass('block');
    $('.header__mobileMenu').toggleClass('show');
    $('.topSlider .slider').slick("slickNext");
    $('.overlay').fadeOut();
  });


  $('.header__mobileMenu ul li a').click(function() {
    $(this).next('ul').addClass('show');
    srolledTop();
  });
  $('.back').click(function() {
    $(this).parent().parent().removeClass('show');
    srolledTop();
  });

  function resizer() {
    var wWidth = $(window).width();
    if (wWidth >= 1200) {
      $('.burger').removeAttr('style');
      $('html').removeClass('block');
      $('.header__mobileMenu').removeClass('show');
      $('.topSlider .slider').slick("slickNext");
      $('.overlay').fadeOut();
    }
  }

  resizer();

  $(window).resize(function() {
    resizer();
  });

  $(".Menu > :nth-child(1) > :first-child").attr("href", "javascript:void(0);");
  $(".Menu > :nth-child(2) > :first-child").attr("href", "javascript:void(0);");
  $(".Menu > :nth-child(3) > :first-child").attr("href", "javascript:void(0);");
  $(".Menu > :nth-child(4) > :nth-child(2)").remove();
  $(".Menu > :nth-child(5) > :first-child").attr("href", "javascript:void(0);");
  $(".Menu > :nth-child(6) > :nth-child(2)").remove();

  $('.paymentForm .paymentType input').click(function() {
    $('.paymentForm .paymentType input').removeAttr('checked');
    $(this).attr('checked', 'checked');
  });

  $('.paymentForm--inet #card').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--inet .dop').remove();
    $('.paymentForm--inet .lkID input, .paymentForm--inet .summ input').remove();
    $('.paymentForm--inet form').attr('name', 'SB');
    $('.paymentForm--inet form').attr('action', 'http://rgtsparus.ru/putsb.php');
    $('.paymentForm--inet form').prepend('<div class="dop fromSB" style="display:none;"><input class="from_sb" type="hidden" name="description" value="Internet_RGTS_PARUS"><input class="from_sb" name="pre" value="1" type="hidden"></div>');
    $('.paymentForm--inet .lkID').prepend('<input class="from_sb" name="orderNumber" type="text" required>');
    $('.paymentForm--inet .summ').prepend('<input class="from_sb" name="amount" type="text" required>');
    setTimeout(function() {
      var sum = $('.balans').text().replace(/[^.,0-9]/gim, '');
      var pc = $('.pc').html();
      if (sum <= 0 && pc <= 0) {
        $('.paymentForm .lkID input').val(val1);
        $('.paymentForm .summ input').val(val2);
      } else {
        pc_balance();
      }
    }, 10);
  });

  $('.paymentForm--inet #qiwi').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--inet .dop').remove();
    $('.paymentForm--inet .lkID input, .paymentForm--inet .summ input').remove();
    $('.paymentForm--inet form').attr('name', 'WMR');
    $('.paymentForm--inet form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--inet form').prepend('<div class="dop fromQIWI" style="display:none;"><input class="from_qiwi" type="hidden" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input class="from_qiwi" type="hidden" name="LMI_CURRENCY" value="RUB"><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_SYSTEM" value="46"></div>');
    $('.paymentForm--inet .lkID').prepend('<input class="from_qiwi" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--inet .summ').prepend('<input class="from_qiwi" name="LMI_PAYMENT_AMOUNT" type="text" required><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_DESC" value="Internet RGTS PARUS"><input class="from_qiwi" type="hidden" name="LMI_SIM_MODE" value="0">');
    setTimeout(function() {
      var sum = $('.balans').text().replace(/[^.,0-9]/gim, '');
      var pc = $('.pc').html();
      if (sum <= 0 && pc <= 0) {
        $('.paymentForm .lkID input').val(val1);
        $('.paymentForm .summ input').val(val2);
      } else {
        pc_balance();
      }
    }, 10);
  });

  $('.paymentForm--inet #webMoney').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--inet .dop').remove();
    $('.paymentForm--inet .lkID input, .paymentForm--inet .summ input').remove();
    $('.paymentForm--inet form').attr('name', 'WMR');
    $('.paymentForm--inet form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--inet form').prepend('<div class="dop fromWEBM" style="display:none;"><input class="from_webm" type="hidden" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input class="from_webm" type="hidden" name="LMI_CURRENCY" value="RUB"></div>');
    $('.paymentForm--inet .lkID').prepend('<input class="from_webm" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--inet .summ').prepend('<input class="from_webm" name="LMI_PAYMENT_AMOUNT" type="text" required><input class="from_webm" type="hidden" name="LMI_PAYMENT_DESC" value="Internet RGTS PARUS"><input class="from_webm" type="hidden" name="LMI_SIM_MODE" value="0">');
    setTimeout(function() {
      var sum = $('.balans').text().replace(/[^.,0-9]/gim, '');
      var pc = $('.pc').html();
      if (sum <= 0 && pc <= 0) {
        $('.paymentForm .lkID input').val(val1);
        $('.paymentForm .summ input').val(val2);
      } else {
        pc_balance();
      }
    }, 10);
  });


  $('.paymentForm--TV #card').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--TV .dop').remove();
    $('.paymentForm--TV .lkID input, .paymentForm--TV .summ input').remove();
    $('.paymentForm--TV form').attr('name', 'WMR');
    $('.paymentForm--TV form').attr('action', 'http://rgtsparus.ru/putsb.php');
    $('.paymentForm--TV form').prepend('<div class="dop fromSB" style="display:none;"><input name="s" type="checkbox" checked="checked"><input class="from_sb" type="hidden" name="description" value="KTV_RGTS_PARUS"><input class="from_sb" name="pre" value="1" type="hidden"></div>');
    $('.paymentForm--TV .lkID').prepend('<input class="from_sb" name="orderNumber" type="text" required>');
    $('.paymentForm--TV .summ').prepend('<input class="from_sb" name="amount" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('.paymentForm--TV #qiwi').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--TV .dop').remove();
    $('.paymentForm--TV .lkID input, .paymentForm--TV .summ input').remove();
    $('.paymentForm--TV form').attr('name', 'WMR');
    $('.paymentForm--TV form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--TV form').prepend('<div class="dop fromQIWI" style="display:none;"><input name="s" class="from_qiwi" type="checkbox" checked="checked"><input type="hidden" class="from_qiwi" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input type="hidden" name="LMI_CURRENCY" value="RUB"><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_SYSTEM" value="46"></div><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_DESC" value="KTV RGTS PARUS"><input class="from_qiwi" type="hidden" name="LMI_SIM_MODE" value="0">');
    $('.paymentForm--TV .lkID').prepend('<input class="from_qiwi" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--TV .summ').prepend('<input class="from_qiwi" name="LMI_PAYMENT_AMOUNT" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('.paymentForm--TV #webMoney').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--TV .dop').remove();
    $('.paymentForm--TV .lkID input, .paymentForm--TV .summ input').remove();
    $('.paymentForm--TV form').attr('name', 'WMR');
    $('.paymentForm--TV form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--TV form').prepend('<div class="dop fromWEBM" style="display:none;"><input name="s" class="from_webm" type="checkbox" checked="checked"><input class="from_webm" type="hidden" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input class="from_webm" type="hidden" name="LMI_CURRENCY" value="RUB"></div><input class="from_webm" type="hidden" name="LMI_PAYMENT_DESC" value="KTV RGTS PARUS"><input class="from_webm" type="hidden" name="LMI_SIM_MODE" value="0">');
    $('.paymentForm--TV .lkID').prepend('<input class="from_webm" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--TV .summ').prepend('<input class="from_webm" name="LMI_PAYMENT_AMOUNT" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('.paymentForm--SIBIS #card').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--SIBIS .dop').remove();
    $('.paymentForm--SIBIS .lkID input, .paymentForm--SIBIS .summ input').remove();
    $('.paymentForm--SIBIS form').attr('name', 'WMR');
    $('.paymentForm--SIBIS form').attr('action', 'http://rgtsparus.ru/putsb.php');
    $('.paymentForm--SIBIS form').prepend('<div class="dop fromSB" style="display:none;"><input name="s" type="checkbox" checked="checked"><input class="from_sb" type="hidden" name="description" value="DOMOFON_RGTS_PARUS"><input class="from_sb" name="pre" value="1" type="hidden"></div>');
    $('.paymentForm--SIBIS .lkID').prepend('<input class="from_sb" name="orderNumber" type="text" required>');
    $('.paymentForm--SIBIS .summ').prepend('<input class="from_sb" name="amount" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('.paymentForm--SIBIS #qiwi').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--SIBIS .dop').remove();
    $('.paymentForm--SIBIS .lkID input, .paymentForm--SIBIS .summ input').remove();
    $('.paymentForm--SIBIS form').attr('name', 'WMR');
    $('.paymentForm--SIBIS form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--SIBIS form').prepend('<div class="dop fromQIWI" style="display:none;"><input name="s" class="from_qiwi" type="checkbox" checked="checked"><input type="hidden" class="from_qiwi" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input type="hidden" name="LMI_CURRENCY" value="RUB"><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_SYSTEM" value="46"></div><input class="from_qiwi" type="hidden" name="LMI_PAYMENT_DESC" value="DOMOFON RGTS PARUS"><input class="from_qiwi" type="hidden" name="LMI_SIM_MODE" value="0">');
    $('.paymentForm--SIBIS .lkID').prepend('<input class="from_qiwi" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--SIBIS .summ').prepend('<input class="from_qiwi" name="LMI_PAYMENT_AMOUNT" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('.paymentForm--SIBIS #webMoney').click(function() {
    var val1 = $('.paymentForm .lkID input').val();
    var val2 = $('.paymentForm .summ input').val();
    $('.paymentForm--SIBIS .dop').remove();
    $('.paymentForm--SIBIS .lkID input, .paymentForm--SIBIS .summ input').remove();
    $('.paymentForm--SIBIS form').attr('name', 'WMR');
    $('.paymentForm--SIBIS form').attr('action', 'http://rgtsparus.ru/putpm.php');
    $('.paymentForm--SIBIS form').prepend('<div class="dop fromWEBM" style="display:none;"><input name="s" class="from_webm" type="checkbox" checked="checked"><input class="from_webm" type="hidden" name="LMI_MERCHANT_ID" value="f412758b-1061-4890-8d61-e58c8cdcc852"><input class="from_webm" type="hidden" name="LMI_CURRENCY" value="RUB"></div><input class="from_webm" type="hidden" name="LMI_PAYMENT_DESC" value="DOMOFON RGTS PARUS"><input class="from_webm" type="hidden" name="LMI_SIM_MODE" value="0">');
    $('.paymentForm--SIBIS .lkID').prepend('<input class="from_webm" name="LMI_PAYMENT_NO" type="text" required>');
    $('.paymentForm--SIBIS .summ').prepend('<input class="from_webm" name="LMI_PAYMENT_AMOUNT" type="text" required>');
    setTimeout(function() {
      $('.paymentForm .lkID input').val(val1);
      $('.paymentForm .summ input').val(val2);
    }, 100);
  });

  $('form #personal_data').click(function() {
    if ($(this).is(':checked')) {
      $(this).parents('form').find('#personal_data').attr('checked', 'checked');
      $(this).parents('form').find('input[type="submit"]').removeAttr('disabled');
    } else {
      $(this).parents('form').find('#personal_data').removeAttr('checked');
      $(this).parents('form').find('input[type="submit"]').attr('disabled', 'disabled');
    }
  });

  function pc_balance() {

    $('.balans, .pc').each(function() {
      var balans = $('.balans').html();
      var sum = $('.balans').text().replace(/[^.,0-9]/gim, '');
      var pc = $('.pc').html();

      if (balans.indexOf('-') !== -1) {
        $('.summ input').val(sum);
      } else {
        $('.summ input').val("0");
      }

      if (pc <= 0) {
        $('.your_pc').text('Лицевой счет неопределён');
        $('.lkID input').val(pc);
      } else {
        $('.your_pc').text('Ваш лицевой счет определён как ' + pc + ' , баланс ' + balans + ' руб.');
        $('.lkID input').val(pc);
      }

    });

    $('.lkID input, .summ input').on('click', function() {
      var thisval = $(this).val();
      if (thisval <= 0) {
        $(this).val('');
      }
    });

  }

  pc_balance();

  $('.paymentForm--TV input[type="submit"]').on('click', function() {
    $('.paymentForm--TV .lkID input').each(function() {
      var id = $(this).attr('id')
      var val = $(this).val();
      localStorage.setItem(id, val);

    })
  })
  $('.paymentForm--TV .lkID input').each(function() {
    var id = $(this).attr('id');
    var value = localStorage.getItem(id);
    $(this).val(value);
  });

  $('.paymentForm--SIBIS input[type="submit"]').on('click', function() {
    $('.paymentForm--TV .lkID input').each(function() {
      var id = $(this).attr('id')
      var val = $(this).val();
      localStorage.setItem(id, val);

    })
  })
  $('.paymentForm--SIBIS .lkID input').each(function() {
    var id = $(this).attr('id');
    var value = localStorage.getItem(id);
    $(this).val(value);
  });

  $('.tariffSlider .tariff .btn').click(function() {
    var v1 = $(this).parents('.tariff').find('.tariff__title').text();
    $('.tariffInfo input[name="tariff"]').val(v1);
  });

  $('form[name="tariffInfo"] input[type="submit"]').click(function() {
    //get input field values
    // var name = $(this).parents('form').find('input[name="name"]').val();
    var tel = $(this).parents('form').find('input[name="tel"]').val();
    var tariff = $(this).parents('form').find('input[name="tariff"]').val();

    /********validate all our form fields***********/
    /* Name field validation  */
    // if (name == "") {
    //   $(this).parents('form').find('input[name="name"]').css('border-color', 'red');
    // };
    // $(this).parents('form').find('input[name="name"]').keyup(function() {
    //   $(this).removeAttr('style');
    // });
    /* email field validation  */
    if (tel == "") {
      $(this).parents('form').find('input[name="tel"]').css('border-color', 'red');
    };
    $(this).parents('form').find('input[name="tel"]').keyup(function() {
      $(this).removeAttr('style');
    });
    /********Validation end here ****/
    /* If all are ok then we send ajax request to email_send.php *******/

    $.ajax({
      url: "sendCallBack.php",
      type: "post", // метод передачи
      dataType: "json", // тип передачи данных
      data: { // что отправляем
        // "name": name,
        "tel": tel,
        "tariff": tariff,
      },

      success: function(data) {

        $('form[name="tariffInfo"]  #result').html(data.result); // выводим ответ сервера
        $('form[name="tariffInfo"] input[name="name"], form[name="tariffInfo"] input[name="tel"]').val('');
          resultClean();
      },
      error: function(data) {
        $('form[name="tariffInfo"]  #result').html(data.result); // выводим ответ сервера
          resultClean();
      }
    });
  });

  $('form[name="CallBackMe"] input[type="submit"]').click(function() {
    //get input field values
    var name = $(this).parents('form').find('input[name="name"]').val();
    var tel = $(this).parents('form').find('input[name="tel"]').val();
    var address = $(this).parents('form').find('input[name="address"]').val();
    var comment = $(this).parents('form').find('textarea[name="comment"]').val();
    var connectionType = $(this).parents('form').find('input[name="connectionType"]:checked').parents('label').find('p').html();
    /********validate all our form fields***********/
    /* Name field validation  */
    if (address == "") {
      $(this).parents('form').find('input[name="address"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[name="address"]').keyup(function() {
      $(this).removeAttr('style');
    });
    /* email field validation  */
    if (tel == "") {
      $(this).parents('form').find('input[name="tel"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[name="tel"]').keyup(function() {
      $(this).removeAttr('style');
    });
    /********Validation end here ****/
    /* If all are ok then we send ajax request to email_send.php *******/

    $.ajax({
      url: "CallBackMe.php",
      type: "post", // метод передачи
      dataType: "json", // тип передачи данных
      data: { // что отправляем
        // "name": name,
        "address": address,
        "tel": tel,
        "comment": comment,
        "connectionType": connectionType,

      },

      success: function(data) {

        $('form[name="CallBackMe"] #result').html(data.result); // выводим ответ сервера
        $('form[name="CallBackMe"] input[type="text"], form[name="CallBackMe"] textarea[name="comment"], form[name="CallBackMe"] input[type="tel"]').val('');
          resultClean();
      },
      error: function(data) {
        $('form[name="CallBackMe"] #result').html(data.result); // выводим ответ сервера
          resultClean();
      }
    });
  });

  $('form[name="Report"] input[type="submit"]').click(function() {
    //get input field values
    var name = $(this).parents('form').find('input[name="name"]').val();
    var tel = $(this).parents('form').find('input[type="tel"]').val();
    var address = $(this).parents('form').find('input[name="address"]').val();
    var comment = $(this).parents('form').find('textarea[name="comment"]').val();
    var email = $(this).parents('form').find('input[type="email"]').val();
    /********validate all our form fields***********/
    /* Name field validation  */
    if (address == "") {
      $(this).parents('form').find('input[name="address"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[name="address"]').keyup(function() {
      $(this).removeAttr('style');
    });
    if (name == "") {
      $(this).parents('form').find('input[name="name"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[name="name"]').keyup(function() {
      $(this).removeAttr('style');
    });
    if (tel == "") {
      $(this).parents('form').find('input[type="tel"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[type="tel"]').keyup(function() {
      $(this).removeAttr('style');
    });
    if (email == "") {
      $(this).parents('form').find('input[type="email"]').css('border', '1px solid red');
    };
    $(this).parents('form').find('input[type="email"]').keyup(function() {
      $(this).removeAttr('style');
    });
    /********Validation end here ****/
    /* If all are ok then we send ajax request to email_send.php *******/

    $.ajax({
      url: "Report.php",
      type: "post", // метод передачи
      dataType: "json", // тип передачи данных
      data: { // что отправляем
        "name": name,
        "address": address,
        "tel": tel,
        "email": email,
        "comment": comment,
        // "connectionType": connectionType,

      },

      success: function(data) {

        $('form[name="Report"] #result').html(data.result); // выводим ответ сервера
        $('form[name="Report"] input[type="email"], form[name="Report"] input[type="text"], form[name="Report"] textarea[name="comment"], form[name="Report"] input[type="tel"]').val('');
          resultClean();
      },
      error: function(data) {
        $('form[name="Report] #result').html(data.result); // выводим ответ сервера
          resultClean();
      }
    });
  });

  function resultClean() {
    $('#result').each(function() {
      setTimeout(function() {
        $(this).html('');
      }, 5000);
    })
  }

});

//# sourceMappingURL=main.js.map
