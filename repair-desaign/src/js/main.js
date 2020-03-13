$(document).ready(function () {
  // script for modal window
  var modal = $('.modal'),
    modalBtn = $('.button'),
    closeBtn = $('.modal__close');

  // on click we toggle class for modal 
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  // on click we toggle class for modal
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
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

});