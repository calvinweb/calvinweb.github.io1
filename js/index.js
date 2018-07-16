var $_GET = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();
$(document).on("pageinit","#pageone",function(){
  $("body").on("swipeleft",function(){
    alert("您向左滑动！");
  });                       
});
$(function () {
  'use strict';

  var slidebar = $(".slidebar"),
    mask = $(".mask"),
    slidebar_trigger = $("#slidebar_trigger"),
    moreA = $(".more a"),
    backTop = $(".backTop");

  /*侧栏鼠标点击事件*/
  slidebar_trigger.on('click', function () {
   mask.fadeIn();
    slidebar.animate({
      'right': 0
    });
  });
  moreA.on('click', function () {
    mask.fadeIn();
    slidebar.animate({
      'right': 0
    });
  });
  /*遮罩层鼠标点击事件*/
  mask.on('click', function () {
    mask.fadeOut();
    slidebar.animate({
      'right': -slidebar.width()
    })
  });
  /*回到顶部按钮点击事件*/
  backTop.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800)
  });
  /*鼠标滚动事件*/
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= $(window).height()) {
      backTop.fadeIn();
    } else {
      backTop.fadeOut();
    }
  });
  //模拟页面滚动事件
  $(window).trigger('scroll');
})