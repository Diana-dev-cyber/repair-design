$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  // Влидация формы modal
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // првило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    //правила сообщений
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com",

      }
    },

    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        daaType: 'thanks.html',
        success: function (response) {
          // alert('Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          footer.removeClass('footer--visible');
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
      done(function () {
        window.location = "../thanks.html"
      })
    }

  });

  // маска для телефона
  $('[type=tel]').mask('+7(000) 00-00-000', {
    placeholder: "+7 (___) __-__-___"
  });
  // Влидация формы control
  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // првило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    }, //правила сообщений
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com",

      }
    }
  });

  // Влидация формы footer
  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userQuestion: {
        required: true,
      },
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      // првило-объект (блок)
      userEmail: {
        required: true,
        email: true
      }
    },
    //правила сообщений
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
        maxlength: "Имя не длинее 15 букв"
      },
      userPhone: "Телефон обязателен",
      userQuestion: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email: name@domain.com",
      }
    }
  });
  var player;
  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();

  }
  // показывать карту только когда до крутили до нее

  var design = $('.design');
  var designTop = design.offset().top;
  $(window).bind('scroll', function () {
    var windowTop = $(this).scrollTop();
    if (windowTop > designTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A504457943a3c9b8267af4090cbf4930e85ce186de3568b7f44dbcf5c554d9c5c&amp;width=100%25&amp;height=465&amp;lang=ru_RU&amp;scroll=true" ></script >')
      $(window).unbind('scroll')
    }
  });

  type = "text/javascript" > (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () {
      (m[i].a = m[i].a || []).push(arguments)
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })(window, document, "script", "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js", "ym");
  ym(56967223, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true
  });

  /* begin Scroll Down Button */
  (function () {
    'use strict';

    var btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }

    btnScrollDown.addEventListener('click', scrollDown);
  })();
  /* end Scroll Down Button */

});