$(document).ready(function () {
  // script for modal window
  var modal = $('.modal'),
    modalBtn = $('.button'),
    closeBtn = $('.modal__close');
  var dialog = $(".modal__dialog");



  // on click we toggle class for modal 
  modalBtn.on('click', function () {
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
      el: '.swiper-pagination',
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

  // finished__swiper
  //initialize swiper when document ready
  var mySwiper = new Swiper('.goal__swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  var goalNext = $('.goal__swiper-button-next');
  var goalPrev = $('.goal__swiper-button-prev');
  var goalBullets = $('.goal__swiper-pagination');

  goalNext.css('left', goalNext.width() + 20 + goalBullets.width() + 20)
  goalBullets.css('left', goalPrev.width() + 20);

});

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