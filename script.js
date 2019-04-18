$(document).ready(function(){
  $(".right ul li").hover(function(){
    $(this).find("ul").stop().fadeToggle(500);
  });

  setInterval(function(){
    $('.slider').animate({ 'margin-left':-width},1500, function(){
      $('.slider').css({'margin-left':0});
      $('.slider li').eq(0).appendTo('.slider');
    });
  }, 3000);
  $('a[rel="lightbox"]').colorbox();
});
