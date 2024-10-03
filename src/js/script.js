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

    // 現在のURLを取得
    const href = location.href;
    // ヘッダーの中のaタグを全部取得
    var links = document.querySelectorAll(".p-pc-nav__items > li > a");

    // ループでURLと一致したaタグに current を付ける。
    for (var i = 0; i < links.length; i++) {
    if (links[i].href == href) {
        document.querySelectorAll(".p-pc-nav__items > li")[i].classList.add("current");
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


    /////////////////////// Campaignスライダー ///////////////////////
    // Campaignリサイズ処理（PC時のみ矢印表示）
    const service_slideLength = document.querySelectorAll('.js-newequipment-swiper .swiper-slide').length;
    $(window).resize(function () {
        service_arrow();
    });
    service_arrow();
    function service_arrow() {
        if (window.matchMedia('(max-width: 767px)').matches || service_slideLength <= 3) {
        $('.js-newequipment-arrow').hide();
        } else {
        $('.js-newequipment-arrow').show();
        }
    }

    /*****Campaignスライダー*****/
    var service_swiper = new Swiper('.js-newequipment-swiper', {
        loop: true,
        speed: 2000,
        slidesPerView: 1.27,
        spaceBetween: 24,
        // autoplay: {
        // delay: 2000,
        // disableOnInteraction: false,
        // },
        breakpoints: {
        768: {
            slidesPerView: 3.485,
            spaceBetween: 39,
        },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true 
        }
    });

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
    
    if (document.querySelectorAll('.text').length) {
        // クラスの付け外しのみ
        const text = document.querySelector('.text');
        text.classList.add('is-active');
    
        setInterval(() => {
        text.classList.toggle('is-active');
        }, 3000);
    }


    //スクロールエフェクト
  const sections = document.querySelectorAll("[data-section]");
  sections.forEach((section) => {
    const inner = section.querySelector("[data-section-inner]");
  
    ScrollTrigger.create({
    //   markers: 'true',
      trigger: section,
      start: "center center",
      onEnter: () => {
        gsap.set(inner, {
          position: "fixed",
          top: "25%",
        });
      },
      onLeaveBack: () => {
        gsap.set(inner, {
          position: "absolute",
          bottom: "auto",
        });
      },
    });
  });

    
});

new Vivus('mask', {//svgに指定したid名
    type: 'oneByOne',// アニメーションのタイプを設定
    duration: 350,//アニメーションの時間。数字が小さくなれば速くなり、大きくなれば遅くなる
     animTimingFunction:Vivus.EASE_OUT,
     start: 'autostart'
    });

$(function () {
    var webStorage = function () {
        if (sessionStorage.getItem('access')) {
            // 2回目以降アクセス時の処理
            // $(".loading-animation").removeClass('is-active');  // ローディングアニメーションを即座に非表示
            // 初回アクセス時の処理
           
        } else {
            // 初回アクセス時の処理
            sessionStorage.setItem('access', 'true');  // sessionStorageにデータを保存
            $(".loading-animation").addClass('is-active');  // ローディングアニメーションを表示

            setTimeout(function () {
                $(".loading-animation").addClass('is-color');  // ローディングを非表示にして背景をフェードアウト
            }, 6500);  // ローディング表示の時間（5秒）
            setTimeout(function () {
                $(".loading-animation").removeClass('is-active');  // ローディングを非表示にして背景をフェードアウト
            }, 7500);  // ローディング表示の時間（5秒）
        }
    };
    webStorage();
  });

  
  