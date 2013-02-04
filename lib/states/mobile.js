var $ = require('jquery')
  , settings = require('../settings')
  , keys = require('mousetrap')
  , see = require('../support/see');

var Mobile = exports;

Mobile.enter = function(ctx){
  // if(window.WebGLRenderingContext)
  //   return;
  //not show 3dtransforms else if()
  // 
  // else

  $('html').addClass('mobile').css('paddingBottom', 64);
    window.scrollTo(0,0)
  $('html').css('paddingBottom', 0)

  $('#gamepad .button:first')
    .on('mousedown touchstart', function(){ keys.trigger('left,a','keydown'); $(this).addClass('down'); return false; })
    .on('mouseup touchend', function(){ keys.trigger('left,a','keyup'); $(this).removeClass('down'); return false; })
  $('#gamepad .button:last')
    .on('mousedown touchstart', function(){ keys.trigger('right,d','keydown'); $(this).addClass('down'); return false; })
    .on('mouseup touchend', function(){ keys.trigger('right,d','keyup'); $(this).removeClass('down'); return false; })


  $('#canv-css .background img')
    .attr('src', $('#canv-css .background img').data( $(document).width() > 800 ? 'src-tablet' : 'src-mobile'));
  $(window).on('resize', function(){
    var rect = {w: 1200, h: 700}
      , dw = $(document).width()
      , dh = $(document).height()
      , w = dw / rect.w
      , h = dh / rect.h
      , scale = (w > h) ? h : w;
    document.getElementById('canv-css').style.webkitTransform = 'scale('+scale+')';
    if( scale < 1)
      settings.data.mouseSensitivity = 1-scale;
    document.getElementsByTagName('body')[0].style.clip = 'rect(0, '+dw+'px, '+dh+'px, 0)'
  }).resize();

}

Mobile.leave = function leaveLoadingSync(ctx){
}