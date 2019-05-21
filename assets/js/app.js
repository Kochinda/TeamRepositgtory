

$(function() {

  // 画像がクリックされたら、div#overを.containerに追加



  // 画像がクリックされたら

  $('.img').click(function() {

    // let div = $('<div>');

    // div.attr('id', 'over');

    // .containerの小要素にdiv#overを追加する

    // $('.container').append($('<div id="over">'));

    

  //   $('<div id="over">').appendTo($('.img-box2')).hide().fadeIn();

  $('body').append($('<div id= "over">' ));



    //div#overにいろいろ追加

    //$('#over').append($('<div class="img-box"><span class="close">&times;</span><img class="lightbox" src="./assets/images/bg1.jpg" width="500px"></div>'))

    $('#over').append($('<div class="img-box2">'));

    $('.img-box2').append($('<span class="close">&times;</span>'));

    $('.img-box2').append($('<img class="lightbox">'));



    // クリックされた画像のsrcを取得する

    let imageSrc = $(this).attr('src');



    //  作成した<img class="lightbox">のsrcにクリックされた画像のsrcを設定

    $('.lightbox').attr('src', imageSrc);



    $('.close').click(function(){

    $('#over').fadeOut(function(){

        $('#over').remove();

    });    

    })

  })

  });