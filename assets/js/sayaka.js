$(function(){
    
    // icon x がクリックされたら、menu-title-showのpタグを表示する
    $('.iconx').click(function(){
        $('.menu-title-show').slideDown('slow');


    // slidedownのセクションからマウスが離れたら、
    // menu-title-showのPタグを非表示にする
          

    })

    $('.slidedown').mouseleave(function(){

        $(this).find('.menu-title-show').slideUp();
   
    })
});
