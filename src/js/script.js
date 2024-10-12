jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    /////////////////////// ページトップへ戻るボタン ///////////////////////
    var pagetop = $('#page-topbtn');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
        jQuery('.c-totop').addClass('is-show');
        } else {
        jQuery('.c-totop').removeClass('is-show');
        }
    });

    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });

    $(function () {
        
        $('body').fadeIn(1500); //1秒かけてフェードイン！
	
    });
        
      

    /*********************カレントページのヘッダーナビに下線**************************/
    // 現在のURLを取得
    // const href = location.href;
    // // ヘッダーの中のaタグを全部取得
    // var links = document.querySelectorAll(".p-pc-nav > li > a");

    // // ループでURLと一致したpタグに current を付ける。
    // for (var i = 0; i < links.length; i++) {
    //     if (links[i].href == href) {
    //         document.querySelectorAll(".p-pc-nav > li > a > p")[i].classList.add("current");
    //     }
    // }

    const href = location.href.split("#")[0].split("?")[0]; // ハッシュやクエリを除外

    var links = document.querySelectorAll(".p-pc-nav > li > a");

    for (var i = 0; i < links.length; i++) {
        const linkHref = links[i].href.split("#")[0].split("?")[0]; // リンクのハッシュやクエリを除外

        if (linkHref == href) {
            const pTag = links[i].querySelector("p"); // aタグ内のpタグを取得
            if (pTag) { // pタグが存在するか確認
                pTag.classList.add("current");
            }
        }
    }



    
    /////////////////////// ドロワーメニュー ///////////////////////
    $('.js-hamburger').click(function () {
        if ($('.js-hamburger').hasClass('is-active')) {
        // メニューが閉じられるときの処理
        $('.js-hamburger').removeClass('is-active');
        $('.js-sp-nav').fadeOut(300);
        $('body').removeClass('is-scroll'); // body要素のスクロール固定をOFF
        } else {
        // メニューが開かれるときの処理
        $('.js-hamburger').addClass('is-active');
        $('.js-sp-nav').fadeIn(300);
        $('body').addClass('is-scroll'); // body要素のスクロール固定をON
        }
    });

    // ページ内リンクをクリックするとメニューが閉じる
    $('.js-sp-nav a[href]').on('click', function (event) {
        $('.js-hamburger').removeClass('is-active');
        $('.js-sp-nav').fadeOut(300);
        $('body').removeClass('is-scroll'); // body要素のスクロール固定をOFF
    });

    // 画面幅が768px以上になるとメニューが閉じる
    $(window).resize(function () {
        if ($(window).width() >= 768) {
        if ($('.js-hamburger').hasClass('is-active')) {
            $('.js-hamburger').removeClass('is-active');
            $('.js-sp-nav').fadeOut(300);
            $('body').removeClass('is-scroll'); // body要素のスクロール固定をOFF
        }
        }
    });


    // 全ページ共通下からふわっとフェードイン
    $(window).on('scroll load', function(){        /* ページロード時、またはスクロールされた時*/
        var scroll = $(this).scrollTop();            /* 現在のスクロール量を測定 */
        var windowHeight = $(window).height();       /* ウィンドウの高さを測定 */
        $('.fadeIn').each(function(){                /* 「fadeIn」のクラスがついているものを1つずつ確認し・・・ */
          var cntPos = $(this).offset().top;         /* 対象の要素の上からの距離を測定 */
          if(scroll > cntPos - windowHeight + windowHeight / 3){  /* 要素がある位置までスクロールされていたら */
            $(this).addClass('active');              /* 「active」のクラスを付与 */
          }
        });
    });


    /////////////////////// スライダー ///////////////////////
    $(".js-service-slick").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        adaptiveHeight: false,
        pauseOnFocus: false,
        pauseOnHover: false, 
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    centerMode: true, // 中央寄せ表示
                    centerPadding: '100px', // 前後のスライドの見切れ幅
                },
            },
        ],
        prevArrow: $(".js-service-arrow-prev"),
        nextArrow: $(".js-service-arrow-next")
    });
    


    /****************上スクロールでナビゲーション表示**************/
    $(function() {
        var startPos = 0,winScrollTop = 0;
        $(window).on('scroll',function(){
            winScrollTop = $(this).scrollTop();
            if (winScrollTop >= startPos) {
                if(winScrollTop >= 200){
                    $('.p-pc-nav').addClass('hide');
                }
            } else {
                $('.p-pc-nav').removeClass('hide');
            }
            startPos = winScrollTop;
        });
    });


    ////////// Recruitセクションのボタンにホバーしたときに画像を拡大////////////////
    // ボタンのホバー時に画像を拡大

    const btn = document.querySelector('.p-top-recruit__btn');
    const img = document.querySelector('.p-top-recruit__img img');
    
    if (btn && img) {
        // ボタンにホバーしたときに画像を拡大
        btn.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.2)';
            img.style.transition = 'transform 0.3s ease-in-out';
        });

        // ボタンからホバーを外したときに画像を元のサイズに戻す
        btn.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    }


    /////////////////////// 矢印が一方通行で戻ってくる ///////////////////////
    const arrowLinks = document.querySelectorAll('.p-sub-equipment__item');
    if(arrowLinks.length > 0) {
    arrowLinks.forEach((arrowLink) => {
        arrowLink.addEventListener('mouseenter', function() {
        arrowLink.classList.add('is-hover');
        },{
        once: true
        });
    });
    }


    /////////////////////// チェックボックスカウント ///////////////////////
    const checkboxes = document.querySelectorAll('.p-about-recruit__checkbox input[type="checkbox"]');
    const checkedCountElem = document.querySelector('.p-about-recruit__checked-count');
    const totalCountElem = document.querySelector('.p-about-recruit__total-count');

    // チェックされた数を数えて表示する関数
    function updateCheckedCount() {
        const checkedCount = document.querySelectorAll('.p-about-recruit__checkbox input:checked').length;
        checkedCountElem.textContent = String(checkedCount).padStart(2, '0');
    }

    if (checkboxes.length ) {
    // 初期の合計数をセット
        totalCountElem.textContent = String(checkboxes.length).padStart(2, '0');
            // ページ読み込み時に一度実行
        updateCheckedCount();

        // 各チェックボックスにイベントリスナーを追加
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', updateCheckedCount);
        });
    }   
    

    // setTimeout(function () {
    //     animation.classList.add('is-text');
    // }, 1000);
    

    // setInterval(() => {
    // text.classList.toggle('is-active');
    // }, 3000);


    /*********************スクロールエフェクト**************************/
    const sections = document.querySelectorAll("[data-section]");
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // sections.forEach((section) => {
    //     const inner = section.querySelector("[data-section-inner]");
    //     const lastElement = sections.lastElementChild; // sectionsの最後の要素を取得
    
    //     // 全体のスクロール用トリガー
    //     ScrollTrigger.create({
    //         trigger: section,
            
    //         start: "center center",
    //         end: "bottom 30%",
    //         onEnter: () => {
    //             gsap.set(inner, {
    //                 position: "fixed",
    //                 top: "15%",
    //                 // duration: 0.5, // アニメーションのスピード
    //                 // ease: "power2.out"
    //             });
    //         },
    //         onLeaveBack: () => {
    //             gsap.set(inner, {
    //                 position: "absolute",
    //                 top: "initial",
    //                 bottom: "auto",
    //                 // duration: 0.5, // アニメーションのスピード
    //                 // ease: "power2.inOut"
    //             });
    //         },
            
    //         // onLeave: () => {
    //         //     gsap.set(inner, {
    //         //         position: "absolute", // fixedを解除してabsoluteに変更
    //         //         top: "auto",          // 元の位置に戻すための調整
    //         //         bottom: "0",          // absoluteの時にボトムに固定
    //         //         // duration: 0.5,        // アニメーションのスピード
    //         //         // ease: "power2.out"
    //         //     });
    //         // }
    //     });
    
    //     // 最後の要素のスクロール用トリガー
    //     ScrollTrigger.create({
    //         trigger: lastElement,  // innerの最後の要素をトリガーに
    //         // markers: 'true',
    //         start: "cemter cemter", // 最後の要素が画面下に到達した時に発火
    //         end: "bottom bottom", // 最後の要素が画面下に到達した時に発火
    //         onLeave: () => {
    //             gsap.set(inner, {
    //                 position: "absolute", // fixedを解除してabsoluteに変更
    //                 top: "auto",          // 元の位置に戻すための調整
    //                 bottom: "0",          // absoluteの時にボトムに固定
    //                 // duration: 0.5,        // アニメーションのスピード
    //                 // ease: "power2.out"
    //             });
    //         },
    //     });
    // });


   for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const inner = section.querySelector("[data-section-inner]");
    const lastElement = sections[sections.length - 1]; // sectionsの最後の要素を取得

    // 全体のスクロール用トリガー
    ScrollTrigger.create({
        trigger: section,
        
        start: "center center",
        end: "bottom 30%",
        onEnter: () => {
            // スクロール時にinnerを固定表示
            gsap.set(inner, {
                position: "fixed",
                top: "15%",
                // duration: 0.5, // アニメーションのスピード
                // ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            // 戻った時に元に戻す
            gsap.set(inner, {
                position: "absolute",
                top: "initial",
                bottom: "auto",
                // duration: 0.5, // アニメーションのスピード
                // ease: "power2.inOut"
            });
        }
    });

    // 最後のセクションだけ別の処理
    if (section === lastElement) {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "top top",
            onEnter: () => {
                // 何もせずスクロールを続行
            },
            onLeave: () => {
                // 最後のセクションでabsoluteに切り替える
                sections.forEach((sec) => {
                    const innerSec = sec.querySelector("[data-section-inner]");
                    gsap.set(innerSec, {
                        position: "absolute",
                        top: "auto",          // 元の位置に戻すための調整
                        bottom: "0",          // absoluteの時にボトムに固定
                        // duration: 0.5,        // アニメーションのスピード
                        // ease: "power2.out"
                    });
                });
            }
        });
    }
}

    
    

    
    /***************** ローディングアニメーション ***********************/
        // document.addEventListener('DOMContentLoaded', function() {
        // トップページでのみ実行するための条件分岐
        if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
            // Vivusの初期化
            new Vivus('mask', {
                type: 'oneByOne',
                duration: 350,
                animTimingFunction: Vivus.EASE_OUT,
                start: 'autostart'
            });
        }
    // });

    
    // const animation = document.querySelector('.p-one-animation');

    $(window).scroll(function () {
        var target = $(".p-top-about__heading");
        
        if (target.length > 0) { // ターゲットが存在するか確認
          var top = target.offset().top;
          var position = top - $(window).height();
          if ($(window).scrollTop() > position) {
            animation.classList.add('is-text');
          }
        }
    });

    // var text1 = document.querySelector('.text1');
    // var text2 = document.querySelector('.text2');  
    var animation = document.querySelector('.p-one-animation');
    
            if (sessionStorage.getItem('access')) {
                // 2回目以降アクセス時の処理
                
                setTimeout(function () {
                    $(".p-top-mv__left-img").addClass('fadeInleft');
                    $(".text1").addClass('is-text');
                    $(".text2").addClass('is-text');
                }, 1);
                setTimeout(function () {
                    $(".p-top-mv__right-img").addClass('fadeInbottom');
                    
                }, 100);
                //横から1文字ずつ表示させる
                // クラスの付け外しのみ
                   
                    // if (text1) {
                    //   text1.classList.add('is-text');
                    // }
                    // if (text2) {
                    //   text2.classList.add('is-text');
                    // }
 
                  
                
            } else {
                // 初回アクセス時の処理
                sessionStorage.setItem('access', 'true');  // sessionStorageにデータを保存
                $(".p-loading-animation").addClass('is-active');  // ローディングアニメーションを表示

                // 最初に6.5秒間の遅延後にsvg-containerクラスを追加
                setTimeout(function () {
                    $(".p-loading-animation").addClass('svg-container');  // 最後の白塗り
                }, 6500);  // ローディング表示の時間（6.5秒）

                // 7.5秒後にローディングアニメーションを非表示にする
                setTimeout(function () {
                    $(".p-loading-animation").removeClass('is-active');  // ローディングを非表示にして背景をフェードアウト
                    $(".p-top-mv__left-img").addClass('fadeInleft');
                    $(".p-top-mv__right-img").addClass('fadeInbottom');
                    $(".text1").addClass('is-text');
                    $(".text2").addClass('is-text');
                      
                        // if (text1) {
                        //   text1.classList.add('is-text');
                        // }
                        // if (text2) {
                        //   text2.classList.add('is-text');
                        // }
                
                }, 7500);  // ローディング表示の時間（7.5秒）
            }
        
        // webStorage();

    
});
