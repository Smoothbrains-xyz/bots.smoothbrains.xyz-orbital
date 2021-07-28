$(window).scroll(async function() {
  if ($(this).scrollTop() > 0) {
    $('.fade-on-scroll').animate({ opacity: 0 })
  }
});
