$(document).ready(function () {
  // script for modal window
  var modal = $('.modal'),
    modalBtn = $('.contacts__button'),
    heroBtn = $('.hero__button'),
    closeBtn = $('.modal__close');
  var dialog = $(".modal__dialog");
  var success = $(".success");
  var successClose = $(".success__close");
  var successDialog = $(".success__dialog");




  // on click we toggle class for modal 
  modalBtn.on('click', function () {
    modal.show();
  });

  heroBtn.on('click', function () {
    modal.show();
  });

  // on click we toggle class for modal
  closeBtn.on('click', function () {
    modal.hide();
  });

  // if we click out of dialog window we close modal
  $(document).mouseup(function (e) {
    if (!dialog.is(e.target) && dialog.has(e.target).length === 0) {
      modal.hide();
    }
  });


  // scrollUp
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $("#toTop").click(function () {
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });

  // projects__swiper
  //initialize swiper when document ready
  var mySwiper = new Swiper('.projects__swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var projectsNext = $('.projects__swiper-button-next');
  var projectsPrev = $('.projects__swiper-button-prev');
  var projectsBullets = $('.projects__swiper-pagination');

  projectsNext.css('left', projectsNext.width() + 20 + projectsBullets.width() + 20)
  projectsBullets.css('left', projectsPrev.width() + 20);

  // initialize wow
  new WOW().init();


  // form validation
  $('.modal__form').validate({
    errorClass: "modal__validation-error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
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
      userPhone: "Телефон обязателен",
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
          modal.hide();
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

  $('.control__form').validate({
    errorClass: "control__validation-error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
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
      userPhone: "Телефон обязателен",
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

  $('.footer__form').validate({
    errorClass: "footer__validation-error",
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userQuestion: {
        required: true,
        maxlength: 50
      },
      userPhone: "required",
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
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно быть больше 15 букв"
      },
      userQuestion: {
        required: "Задайте вопрос",
        maxlength: "Вопрос должен состоять из не менее  50 символов"
      },
      userPhone: "Телефон обязателен",
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

  // маски для инпутов
  $('[type=tel]').mask("+7(000) 00-00-000", {
    placeholder: "+7 (___) __-__-___"
  });

  function lazyLoad() {
    $('iframe').each(function () {
      var frame = $(this),
        vidSource = $(frame).attr('data-src'),
        distance = $(frame).offset().top - $(window).scrollTop(),
        distTopBot = window.innerHeight - distance,
        distBotTop = distance + $(frame).height();

      if (distTopBot >= 0 && distBotTop >= 0) { // if frame is partly in view
        $(frame).attr('src', vidSource);
        $(frame).removeAttr('data-src');
      }
    });
  }
  // var throttled = _.throttle(lazyLoad, 100);
  $(window).scroll(lazyLoad);

  // controll__video
  var player;
  $('.control__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

});




// // goal-col-swiper
// var mySwiper3 = new Swiper('.image-col__swiper-container', {
//   // Optional parameters
//   loop: true,
//   pagination: {
//     el: '.goal__swiper-pagination',
//     type: 'bullets',
//   },
//   pagination: {
//     el: '.image-col__swiper-pagination',
//     type: 'bullets',
//   },
//   pagination: {
//     el: '.fraction-swiper-pagination',
//     type: 'fraction'
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });


// на чистом джава скрипт будет так
// document.addEventListener("DomContentLoaded", function () {
//   var modal = document.getElementsByClassName('modal');
//   var modal = document.querySelectorAll('.button');
//   var modal = document.getElementsByClassName('modal__close');
//   var modal = document.getElementsByClassName('modal__dialog');

//   modalBtn.addEventListener("click", function () {
//     modal.style.display = "block";
//   });

//   closeBtn.addEventListener("click", function () {
//     modal.style.display = "none";
//   });

//   document.addEventListener("click", function (e) {
//     if (!dialog.is(e.target) && dialog.has(e.target).length === 0) {
//       modal.style.display = "none";
//     }
//   });

// });