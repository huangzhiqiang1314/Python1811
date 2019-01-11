$(function () {

    // 设置回到屏幕宽度
    $('.home').width(innerWidth)

    var topswiper = new Swiper('#topswiper', {
        pagination: '.swiper-pagination',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplay: 2500,
    });

    var mustbuyswiper = new Swiper('#mustbuySwiper', {
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 3,
        loop: true,
        autoplay: 2500,
        freeMode: true
    });
})