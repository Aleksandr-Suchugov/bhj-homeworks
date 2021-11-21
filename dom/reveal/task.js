const banner = document.querySelector('.reveal');
const viewPortSize = window.innerHeight;

window.addEventListener('scroll', function() {
    let bannerAppear = banner.getBoundingClientRect().top;
    let bannerGetOver = banner.getBoundingClientRect().bottom;
    console.log(bannerAppear, bannerGetOver, viewPortSize);
    if ((viewPortSize - bannerAppear - 120 >= 0) && (bannerGetOver - 100 >= 0)) { 
        /*вычитание 120 пикселей от верхней границы элемента 
        и 100 пикселей от нижней границы элемента добавил для 
        визуализации событий - появление/исчезание баннера. */
        banner.classList.add('reveal_active');
    }
    else {
        banner.classList.remove('reveal_active');
    }
});
