/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal); 
  });

  closeBtn.addEventListener('click', switchModal)

});
*/


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
        },
        error: function (response) {
          console.error('Ошибка запроса ' + response);
        }
      });
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

});