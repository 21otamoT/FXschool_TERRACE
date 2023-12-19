$(function (){
  // カルーセル
  $('.carousel').slick({
    arows: true,
    dots : true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  // アコーディオン
  $('.acordion').on('click',function(){
       $(this).toggleClass('close');
       let id = $(this).data('id');
       $(`#${id}`).slideToggle();

  });

  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

});