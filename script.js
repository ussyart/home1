$(function(){
  // top画像フェードイン
  $('#top').fadeIn(1500);
  $('#text-komesan').fadeIn(3000);

  // topの文字「Free space renovated warehouse」のフェードインを開始１秒遅らせる
  setTimeout(function(){
    $('#text-freeapace').fadeIn(3500);
  },1000);

  // topの文字「全く新しいコワーキングスペースの誕生」のフェードインを開始2秒遅らせる
  setTimeout(function(){
    $('#text-subtitle').fadeIn(2500);
  },2000);


　// メニューバー設定
  var $nav   = $('#navArea');
  var $btn   = $('.toggle_btn');
  var $mask  = $('#mask');
  var open   = 'open'; // class

  // メニューバーをクリックするとメニュー出現させる
  $btn.on( 'click', function() {
    if ( ! $nav.hasClass( open ) ) {
    $nav.addClass( open );
  } else {
    $nav.removeClass( open );
  }
  });

  // メニューバーをクリックするとメニューを閉じる
  $mask.on('click', function() {
    $nav.removeClass( open );
  });


  // topの文字「SCROLL」のフェードインを開始4秒遅らせる
  setTimeout(function(){
    $('#text-scroll').fadeIn(1000);
  },4000);

  // topの画像「triangle（▽）」のフェードインを開始4.5秒遅らせる
  setTimeout(function(){
    $('#triangle').fadeIn(1000).css('display','block');
  },4500);

  // topの画像「triangle（▽）」を点滅させる（4.5秒後に開始　2.2秒で消えて 2.3秒で表示される）
  setInterval(function(){
      $("#triangle").fadeOut(2200).fadeIn(2300);
    },4500);

  // 「set-time5」クラスがついている要素は全てフェードインを開始5秒遅らせる
  setTimeout(function(){
    $('.set-time5').fadeIn(1000);
  },5000);

　/* 中間「ソファ」画像にカーソルを乗せると説明文（倉庫のグランジ感を残した...）がフェードインする */
  $('#sofa').hover(
    function(){
    $('#text-interior2').slideDown();
  },
    function(){
    $('#text-interior2').slideUp();
  }
);

  /* 中間「カフェ」画像にカーソルを乗せると説明文（誰でも利用可能な豊富な施設...）がフェードインする */
  $('#cafe').hover(
    function(){
    $('#text-institution2').slideDown();
  },
    function(){
    $('#text-institution2').slideUp();
  }
);

　/* スライド写真をボタン押すと切り替わるようにする */
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    // 変数clickedIndexを定義し、クリックしたボタンのインデックス番号を代入
    var clickedIndex =$('.index-btn').index($(this));
    // eqの引数をclickedIndexに書き換える
    $('.slide').eq(clickedIndex).addClass('active');
  });
  
  
  /* タブレット・スマホで見たときにhoverを無効果する */
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
  

});
