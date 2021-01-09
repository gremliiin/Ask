$(function () {
    openCloseBlock('open-close-btn', 'open-close-block');

    $('.apartment-info__photos--slider').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: false,
        nextArrow: false,
    });
})