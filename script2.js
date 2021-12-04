$(function(){

　 // トップの動画をフェードイン（1.5秒で）
  $('#top-video').fadeIn(1500);

  // トップの文字「The distribution warehouse...」を2秒後にフェードイン
  setTimeout(function(){
    $('#text-top').fadeIn(1500);
  },2000);

  // トップの文字「scroll」を３秒後にフェードイン
  setTimeout(function(){
    $('#text-second').fadeIn(1500);
  },3000);

});
