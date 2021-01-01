const slider = document.querySelector('.swiper-container');
const scrollUp = document.querySelector('.scroll-up');
const demoA = document.querySelectorAll('.demo');

const menuButton = document.querySelector('.header-burger');
const menu = document.querySelector('.header-menu');
const logo = document.querySelector('.header__image');


menuButton.addEventListener('click',
    function () {
        menuButton.classList.toggle('menu-button-active');
        menu.classList.toggle('header-menu_active');
        logo.classList.toggle('header__logo_active');
    })



demoA.forEach(function (i) {
    i.addEventListener('click',
        function () {
            alert("Извините. Вы нажали на кнопку демо.");

        });
});

let mySwiper = new Swiper(slider, {
    slidesPerView: 1, // количество показа слайдов
    spaceBetween: 20,
    autoplay: true,
    pagination: { // пагинация
        el: '.swiper-pagination',
        type: 'bullets', //Сами точки
        clickable: true,
    },
})


window.onscroll = () => {
    if (window.scrollY > 300) {
        scrollUp.classList.add('scroll-up__active');
    } else if (window.scrollY < 300) {
        scrollUp.classList.remove('scroll-up__active');
    }
}