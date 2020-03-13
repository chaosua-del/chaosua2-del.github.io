$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('.button'),
    closeBtn = $('.modal__close');

  console.log(modalBtn);

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});