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
        
        
	
    });


    /*********************アンカーリンク（ヘッダー分の高さを引く）**************************/

     //別ページのリンククリックによるスムーススクロール
    //  function smoothScroll() {
    //     // ページのURLを取得
    //     const url = $(location).attr('href'),
    //     // headerの高さを取得してそれに30px追加した値をheaderHeightに代入
    //     headerHeight = $('.p-header').outerHeight() + 30;
    
    //     // urlに「#」が含まれていれば
    //     if (url.indexOf("#") != -1) {
    //         // urlを#で分割して配列に格納
    //         const anchor = url.split("#");
    //         // 分割した最後の文字列（#◯◯の部分）をtargetに代入
    //         const targetId = anchor[anchor.length - 1];  // ハッシュ部分を取得
    //         const target = $('#' + targetId);  // ターゲット要素を取得
    
    //         // リンク先の位置が正しく取得できた場合にスクロール
    //         if (target.length) {
    //             // リンク先の位置からheaderHeightの高さを引いた値をpositionに代入
    //             const position = Math.floor(target.offset().top) - headerHeight;
    //             // positionの位置に移動
    //             $("html, body").animate({scrollTop: position}, 300);
    //         } else {
    //             console.log("ターゲット要素が見つかりません: ", targetId);
    //         }
    //     }
    // }
    //別ページのリンククリックによるスムーススクロール
  $(function() {
    $('body').hide().fadeIn(1500); // 最初は非表示にして1.5秒かけてフェードイン！

    let pageHash = window.location.hash;
    if (pageHash) {
      let scrollToElement = $(pageHash); // `data-id`ではなく、`id`属性をターゲットに
      if (!scrollToElement.length) return;
      
      // フェードイン完了後にスムーススクロールを実行
      $('body').fadeIn(1500, function() {
        setTimeout(function() { // スクロール処理を遅らせる
            history.replaceState('', '', './'); // ハッシュをURLから削除
            let locationOffset = scrollToElement.offset().top; // ターゲット要素の位置を取得
            let navigationBarHeight = $('.p-header').innerHeight(); // ヘッダーの高さを取得
            locationOffset = locationOffset - navigationBarHeight; // スクロール位置を調整
            $('html, body').animate({
                scrollTop: locationOffset
            }, 300, 'swing'); // スムーススクロールの実行
        }, 500); // 500ミリ秒（0.5秒）遅らせる
        });
    }
  });

  //同ページのリンククリックによるスムーススクロール
  $(function() {
    $('a[href*="#"]').on('click', function() {
      const scrollSpeed = 400;
      const navigationHeight = $(".p-header").innerHeight();
      const scrollToTarget = $(this.hash === '#' || '' ? 'html' : this.hash)
      if (!scrollToTarget.length) return;
      const scrollPosition = scrollToTarget.offset().top - navigationHeight;
      $('html, body').animate({
          scrollTop: scrollPosition
      }, scrollSpeed, 'swing');
      return false;
    });
  });
    
    
    // ページがロードされた時点でスムーススクロールを実行
    // $(document).ready(function() {
    //     // ページがロードされた時点でスムーススクロールを実行
    //     $(window).on('load', function() {
    //         setTimeout(smoothScroll, 500);  // 500msの遅延
    //     });
    
    //     // 初回アクセス時の処理
    //     if (!sessionStorage.getItem('access')) {
    //         sessionStorage.setItem('access', 'true');  // sessionStorageにデータを保存
    //         // 初回アクセス時の特別な処理をここに記述
    //     }
    
    //     // 2回目以降アクセス時の処理
    //     // ここに2回目以降の特別な処理を記述することも可能
    // });

    // URLのハッシュが変更された場合にもスムーススクロールを実行
    // $(window).on('hashchange', function() {
    //     smoothScroll();
    // });
    
    // URLが変更された場合（ブラウザの戻る・進む操作など）にもスムーススクロールを実行
    // window.addEventListener('popstate', function() {
    //     smoothScroll();
    // });
    

     //同ページのリンククリックによるスムーススクロール
    // $(function () {
    //     $('a[href*="#"]').on('click', function () {
    //     var scrollSpeed = 400;
    //     var navigationHeight = $(".p-header").innerHeight();
    //     var scrollToTarget = $(this.hash === '#' || '' ? 'html' : this.hash);
    //     if (!scrollToTarget.length) return;
    //     var scrollPosition = scrollToTarget.offset().top - navigationHeight;
    //     $('html, body').animate({
    //         scrollTop: scrollPosition
    //     }, scrollSpeed, 'swing');
    //     return false;
    //     });
    // });
        
      

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
    // $(".js-service-slick").slick({
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //     speed: 2000,
    //     adaptiveHeight: false,
    //     pauseOnFocus: false,
    //     pauseOnHover: false, 
    //     slidesToShow: 4,
    //     dots: true,
    //     arrows: true,
    //     centerMode: false,
    //     variableWidth: true,
    //     swipeToSlide: true,
    //     draggable: true,
    //     swipe: true,
    //     // rightPadding: '200px', // 右のスライドの見切れ幅
    //     responsive: [
    //         {
    //             breakpoint: 500,
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerMode: true, // 中央寄せ表示
    //                 centerPadding: '100px', // 前後のスライドの見切れ幅
    //                 variableWidth: false,
    //             },
    //         },
    //         {
    //             breakpoint: 900,
    //             settings: {
    //                 slidesToShow: 2,
    //                 centerMode: true, // 中央寄せ表示
    //                 centerPadding: '100px', // 前後のスライドの見切れ幅
    //                 variableWidth: false,
    //             },
    //         },
    //     ],
    //     prevArrow: $(".js-service-arrow-prev"),
    //     nextArrow: $(".js-service-arrow-next")
    // });
    

    
    // const swiper = new Swiper('.js-service-slick', {
    //     loop: true,
    //     speed: 2000,
    //     slidesPerView: 3.8,
    //     slidesPerGroup: 1,
    //     spaceBetween: 24,
    //     freeMode: false,        
    //     scrollbar: {
    //         el: '.swiper-scrollbar',//.swiper-scrollbarをスクロールバーに指定
    //         hide: false,// スクロールバーが常に表示される
    //         draggable: true, // スクロールバーをドラッグ可能にする
    //         dragSize: 100,
    //     },
    //     mousewheel: {
    //         forceToAxis: true,  // 水平方向のみのスクロールに制限
    //         sensitivity: 0.5,   // スクロール感度の調整
    //       },
    //     autoplay: {
    //         delay: 3000, // 3秒ごとにスライドを切り替える
    //         disableOnInteraction: false, //ユーザーが操作しても自動再生を無効にしない
    //     },
    // });


    /////////////////////// Campaignスライダー ///////////////////////
    // Campaignリサイズ処理（PC時のみ矢印表示）
    const service_slideLength = document.querySelectorAll('.js-newequipment-swiper .swiper-slide').length;
    $(window).resize(function () {
        service_arrow();
    });
    service_arrow();
    function service_arrow() {
        $('.js-newequipment-arrow').show();
    }
    /*****Campaignスライダー*****/
    var service_swiper = new Swiper('.js-newequipment-swiper', {
        loop: true,
        speed: 2000,
        slidesPerView: 1.27,
        spaceBetween: 20,
        centeredSlides: true, 
        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            900: {
                slidesPerView: 3.76,
                spaceBetween: 20,
                centeredSlides: false, 
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
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
    
    /////////////////////// New EquipmentセクションSP版白背景位置調節 ///////////////////////
    $(document).ready(function() {
        var parentWidth = $('.p-top-newequipment__inner').width(); //innerの幅取得
        var childWidth = $('.p-top-newequipment__inner').find('.c-section-heading').width(); //セクションタイトルの幅取得
        var calculatedValue = parentWidth - childWidth;
        $('.p-top-newequipment__inner').css('--child-width', calculatedValue + 'px');
    });
    

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
        // const sections = document.querySelectorAll("[data-section]"); 

        // for (let i = 0; i < sections.length; i++) {
        //     const section = sections[i];
        //     const inner = section.querySelector("[data-section-inner]");
        //     const lastElement = sections[sections.length - 1]; // sectionsの最後の要素を取得

        //     // 全体のスクロール用トリガー
        //     ScrollTrigger.create({
        //         trigger: section,
                
        //         start: "center center",
        //         end: "bottom 30%",
        //         onEnter: () => {
        //             // スクロール時にinnerを固定表示
        //             gsap.set(inner, {
        //                 position: "fixed",
        //                 top: "15%",
        //                 width: "90%",
        //             });
        //         },
        //         refreshPriority: 1, // リフレッシュの優先度を設定
        //         onLeaveBack: () => {
        //             // 戻った時に元に戻す
        //             gsap.set(inner, {
        //                 position: "absolute",
        //                 top: "initial",
        //                 bottom: "auto",
        //             });
        //         },
        //         invalidateOnRefresh: true // リフレッシュ時に再計算
        //     });

        //     // 最後のセクションだけ別の処理
        //     if (section === lastElement) {
        //         ScrollTrigger.create({
        //             trigger: section,
        //             start: "center center",
        //             end: "top top",
        //             onEnter: () => {
        //                 // 何もせずスクロールを続行
        //             },
        //             onLeave: () => {
        //                 // 最後のセクションでabsoluteに切り替える
        //                 sections.forEach((sec) => {
        //                     const innerSec = sec.querySelector("[data-section-inner]");
        //                     gsap.set(innerSec, {
        //                         position: "absolute",
        //                         top: "auto",          // 元の位置に戻すための調整
        //                         bottom: "0",          // absoluteの時にボトムに固定
        //                     });
        //                 });
        //             }
        //         });
        //     }
        // }

        // gsap.delayedCall(0.2, ScrollTrigger.refresh);


        var sections = document.querySelectorAll("[data-section]"); 
        sections.forEach((section, index) => {
            let pinTarget = section.querySelector("[data-section-inner]");
            ScrollTrigger.create({
                trigger: section,
                start: "center center",
                endTrigger: sections[sections.length - 1],
                end: "center center",
                pin: pinTarget,
                invalidateOnRefresh: true, //リフレッシュ時に再計算
            });
            
        });

        function resizeCard() {
            let aboutItems = document.querySelectorAll(".p-about-item");
            let aboutItemsHeight = [];
            aboutItems.forEach((item) => {
                item.style.minHeight = 'auto';
            });
            aboutItems.forEach((item) => {
                aboutItemsHeight.push(item.offsetHeight);
            });
            let maxHeight = Math.max(...aboutItemsHeight);
            aboutItems.forEach((item) => {
                item.style.minHeight = maxHeight + 'px';
            });
        }

        setTimeout(resizeCard, 1000);
        window.addEventListener('resize', resizeCard);

        gsap.delayedCall(0.2, ScrollTrigger.refresh);

    
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

    // $(window).scroll(function () {
    //     var target = $(".p-top-newequipment__heading");
        
    //     if (target.length > 0) { // ターゲットが存在するか確認
    //       var top = target.offset().top;
    //       var position = top - $(window).height();
    //       if ($(window).scrollTop() > position) {
    //         animation.classList.add('is-text');
    //       }
    //     }
    // });

    $(window).scroll(function () {
        var aboutHeading = $(".p-top-about__heading");
        var newEquipmentHeading = $(".p-top-newequipment__heading");
    
        // p-top-about__heading の処理
        if (aboutHeading.length > 0) { // ターゲットが存在するか確認
            var aboutTop = aboutHeading.offset().top;
            var aboutPosition = aboutTop - $(window).height();
            if ($(window).scrollTop() > aboutPosition) {
                animation.classList.add('is-text'); // クラス追加
            }
        }
    
        // p-top-newequipment__heading の処理
        if (newEquipmentHeading.length > 0) { // ターゲットが存在するか確認
            var equipmentTop = newEquipmentHeading.offset().top;
            var equipmentPosition = equipmentTop - $(window).height();
            if ($(window).scrollTop() > equipmentPosition) {
                newEquipmentHeading.find('.p-one-animation').addClass('is-text'); // 子要素にクラス追加
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
