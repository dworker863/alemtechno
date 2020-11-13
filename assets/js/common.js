$(document).ready(function () {
  $('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
  });

  $('.btn-show').click(function () {
    $('.row-show').toggleClass('d-none');
  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    margin: 155,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      900: {
        items: 2
      },
      1200: {
        items: 3
      },
      1400: {
        items: 4,
        loop: false
      }
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 850) {
      $('.navbar').addClass('fixed');
      $('.navbar-brand .logo-light').addClass('d-none');
      $('.navbar-brand .logo-dark').removeClass('d-none');
    } else {
      $('.navbar').removeClass('fixed');
      $('.navbar-brand .logo-light').removeClass('d-none');
      $('.navbar-brand .logo-dark').addClass('d-none');
    }

    if ($(window).scrollTop() === $(document).height() - $(window).height()) {
      $('.nav-item.active').removeClass('active');
      $('.nav-item:nth-child(5)').addClass('active');
    }
    else if ($(window).scrollTop() >= $('.partners').offset().top - 50) {
      $('.nav-item.active').removeClass('active');
      $('.nav-item:nth-child(4)').addClass('active');
    }
    else if ($(window).scrollTop() >= $('.ourprojects').offset().top - 50) {
      $('.nav-item.active').removeClass('active');
      $('.nav-item:nth-child(3)').addClass('active');
    }
    else if ($(window).scrollTop() >= $('.aboutus').offset().top - 50) {
      $('.nav-item.active').removeClass('active');
      $('.nav-item:nth-child(2)').addClass('active');
    }
    else {
      $('.nav-item.active').removeClass('active');
      $('.nav-item:nth-child(1)').addClass('active');
    }
  });

  $('.nav-item').click(function () {
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');
  })

  $('form').submit(function (event) { //Change
    event.preventDefault();
    $('.form-control').addClass('required');
    var th = $(this);
    console.log(th.serialize());
    $.ajax({
      type: 'POST',
      url: '../mail.php', //Change
      data: th.serialize()
    }).done(function () {
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 1000);
    });
    return false;
  });
});