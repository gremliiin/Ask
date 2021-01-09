$(function () {
    $('.apartments-section__card--slider').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow: '<button class="prev-arrow-apartment-slider"></button>',
        nextArrow: '<button class="next-arrow-apartment-slider"></button>',
        dots: true,
    });

    let dots = [];
    document.querySelectorAll('.slick-dots').forEach((el, id) => {
        dots.push(el.childNodes.length);
        for(let i = 0; i < el.childNodes.length; i++) {
            el.childNodes[i].childNodes[0].innerHTML += ` <span>из ${dots[id]}</span>`;
        }
    });

})