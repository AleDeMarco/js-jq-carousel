$(document).ready(function(){
  $('.prev').click(prevBtn);
  $('.next').click(nextBtn);
  $('.nav i').click(function(){
    $('.nav i.active').removeClass('active');
    $(this).addClass('active');
    if ($(this).index() == 0) {
      $('.img img.active').removeClass('active');
      $('.img img.first').addClass('active');
    }
    if ($(this).index() == 1) {
      $('.img img.active').removeClass('active');
      $('.img img:nth-child(2)').addClass('active');
    }
    if ($(this).index() == 2) {
      $('.img img.active').removeClass('active');
      $('.img img:nth-child(3)').addClass('active');
    }
    if ($(this).index() == 3) {
      $('.img img.active').removeClass('active');
      $('.img img.last').addClass('active');
    }
  });
});

function prevBtn() {
  var imgActive = $('.img img.active');
  var iActive = $('.nav i.active');
  imgActive.removeClass('active');
  imgActive.prev().addClass('active');
  iActive.removeClass('active');
  iActive.prev().addClass('active');
  if (imgActive.hasClass('first')) {
    $('.img img.last').addClass('active');
    $('.nav i.last').addClass('active');
  }
};

function nextBtn() {
  var imgActive = $('.img img.active');
  var iActive = $('.nav i.active');
  imgActive.removeClass('active');
  imgActive.next().addClass('active');
  iActive.removeClass('active');
  iActive.next().addClass('active');
  if (imgActive.hasClass('last')) {
    $('.img img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }
};
