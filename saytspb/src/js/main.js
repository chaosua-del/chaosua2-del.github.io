$(document).ready(function () {

  var success = $(".success");
  var successClose = $(".success__close");
  var successDialog = $(".success__block");

  // initialize wow
  new WOW().init();

  // header menu
  $('.nav__menu').on('click', function () {
    $('.nav__list').addClass('nav__open').slideToggle('300');
  });

  var swiper = new Swiper('.cases__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.feedback__swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper3 = new Swiper('.news__swiper-container', {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // form-validation
  $('.price__form').validate({
    errorClass: "price__validation-error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userUrl: {
        required: true,
        url: true
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть больше 2 букв",
        maxlength: "Имя не должно быть больше 15 букв"
      },
      userUrl: {
        required: "Введите адрес вашего сайта",
        url: "Например: https://mysite.com"
      },
      userEmail: {
        required: "Обязательно введите email",
        email: "Некорретно введен email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("AJAX сработал. Ответ сервера: Форма отправлена");
          $(form)[0].reset();
          // modal.hide();
          // success.show();
          // alert("Форма отправлена, мы свяжемся с вами в течении 10 минут.");
        },
        error: function (response) {
          console.error("Ошибка" + response);
        }
      });
    }
  });

  $('.questions__form').validate({
    errorClass: "questions__validation-error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userEmail: {
        required: true,
        email: true
      },
      policyAgreement: {
        required: true,
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя должно быть больше 2 букв",
        maxlength: "Имя не должно быть больше 15 букв"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Телефон слишком короткий"
      },
      userEmail: {
        required: "Обязательно введите email",
        email: "Некорретно введен email"
      },
      policyAgreement: {
        required: "Примите условия соглашения обработки данных"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log("AJAX сработал. Ответ сервера: Форма отправлена");
          $(form)[0].reset();
          success.show();
          // alert("Форма отправлена, мы свяжемся с вами в течении 10 минут.");
        },
        error: function (response) {
          console.error("Ошибка" + response);
        }
      });
    }
  });

  // on click we toggle class for success
  successClose.on('click', function () {
    success.hide();
  });

  // if we click out of dialog window we close success
  $(document).mouseup(function (e) {
    if (!successDialog.is(e.target) && successDialog.has(e.target).length === 0) {
      success.hide();
    }
  });

  // маски для инпутов
  $('[type=tel]').mask("+7(000) 00-00-000", {
    placeholder: "+7 (___) __-__-___"
  });

});
// video-play
// var player;

// $('.hero__video-play').on('click', function onYouTubeIframeAPIReady() {
//   player = new YT.Player('player', {
//     height: '100%',
//     width: '100%',
//     videoId: 'vddBT-xmlZk?rel=0',
//     events: {
//       'onReady': videoPlay,
//     },
//     playerVars: {
//       iv_load_policy: 3,
//       showinfo: 0,
//       modestbranding: 1
//     }
//   });
// })

// function videoPlay() {
//   player.playVideo();
// }