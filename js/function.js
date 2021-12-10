$(function(){
// ここにjQueryを記述

// ハンバーガーメニューボタン
$('#btn').on('click', function(){
    $('#btn__top').toggleClass('rotate-top');
    $('#btn__middle').toggleClass('hide-middle');
    $('#btn__bottom').toggleClass('rotate-bottom');
    $('#gnav').toggleClass('gnav-active');
    $('#gnav__nav').toggleClass('gnav__nav-active');
  });


// --------------
});