jQuery(document).ready(function($) {
  $('.admin-login').click(function(){
    $('.admin-popover-mask').fadeIn(100);
    $('.admin-popover').slideDown(200);
  })
  $('.admin-poptit .close').click(function(){
    $('.admin-popover-mask').fadeOut(100);
    $('.admin-popover').slideUp(200);
  })

})