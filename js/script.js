$(document).scroll(function () {
  if($(this).scrollTop()>$('#carousel-banner').height())
    $('.navbar').css('background-color', '#3366cc');
  else {
    $('.navbar').css('background-color', 'transparent');
  }
});