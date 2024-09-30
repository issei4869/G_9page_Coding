
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
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

    // 初期の合計数をセット
    totalCountElem.textContent = String(checkboxes.length).padStart(2, '0');

    // チェックされた数を数えて表示する関数
    function updateCheckedCount() {
        const checkedCount = document.querySelectorAll('.p-about-recruit__checkbox input:checked').length;
        checkedCountElem.textContent = String(checkedCount).padStart(2, '0');
    }

    // ページ読み込み時に一度実行
    updateCheckedCount();

    // 各チェックボックスにイベントリスナーを追加
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateCheckedCount);
    });

});
