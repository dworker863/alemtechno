$(document).ready(function () {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.btn-show').click(function () {
    $('.row-show').toggleClass('d-none');
  })
});