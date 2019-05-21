$(function(){
    
    // icon x がクリックされたら、menu-title-showのpタグを表示する
    $('.iconx').click(function(){
        $('.menu-title-show').slideDown('slow');


    
          

    })
    // slidedownのセクションからマウスが離れたら、
    // menu-title-showのPタグを非表示にする
    $('.slidedown').mouseleave(function(){

        $(this).find('.menu-title-show').slideUp();
   
    })

    // card-section lightboxの処理

    // cars-btn click,,
    $('.card-btn').click(function(){

        // body にdivタグを追加
        $('body').append($('<div id="over">'));

        // div#over にlightboxを追加
        $('#over').append($('<div class="lightbox">'));

        $('.lightbox').text('Come to our reststaurant, you can get special deals!!!');


        // 画面がクリックされたら、ライトボックスをけす
        $('#over').click(function(){
            $('#over').fadeOut(function(){
                $('#over').remove();

            })
        })
        
    })

});
