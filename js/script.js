// ナビゲーションメニュー //
//メインメニューにhoverしたときの挙動
$(function () {
    $('.p-menu-item').hover(
        //カーソル合う -> サブメニューがスライドダウン
        function () {
            $(this).children('.sub-menu').slideDown();
        },
        //カーソルはずす -> サブメニューを消す
        function () {
            $(this).children('.sub-menu').hide();
        }
    );
});


// ハンバーガーメニュー //
$(function () {
    $('.humburger').click(function () {
        $(this).toggleClass('open');    //humburgerクラスにopenクラスを追加
        $('.p-menu').slideToggle(300);  //p-menuをスライドさせて表示
    });
});

//メインメニュー横 + <-> - の挙動 //
$(function () {
    $('.sub-menus').hover(function () {
        $(this).toggleClass('open');
    });
});



//カルーセル: slick使ってスライドさせる//
$(function () {
    $('.p-carousel-area').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 5000, //自動再生のスライド切り替えまでの時間を設定
        speed: 300, //スライドが流れる速度を設定
        slidesToShow: 2, //表示するスライドの数
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    arrows: false, //矢印非表示
                },
                breakpoint: 599,
                settings: {
                    slidesToShow: 1, //画面幅599px以下でスライド1枚表示
                }
            }
        ]
    });
});

//テッ君のボタン: l-footer-bottomが表示されたらfadeout//
$(function () {
    $(window).scroll(function () {  //スクロールした時に以下の処理を行う
        trigger = $('.l-footer-lower').offset().top; //トリガーにしたい要素の座標
        viewBottom = $(window).scrollTop() + $(window).height();    //表示モニタの最下端座標（表示の上端 + height）
        if (trigger > $(window).scrollTop() && trigger < viewBottom) { //条件分岐
            $('.floating-btn').fadeOut();
        } else {
            $('.floating-btn').fadeIn();
        }
    });
});

