$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.fade-on-scroll').fadeOut();
  } else {
    $('.fade-on-scroll').fadeIn();
  }
});
