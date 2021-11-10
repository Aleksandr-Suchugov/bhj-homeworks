const imageElms = document.querySelectorAll(".slider__item");
const sliderCount = imageElms.length;
const leftBtn = document.querySelector(".slider__arrow_prev");
const rightBtn = document.querySelector(".slider__arrow_next");

leftBtn.addEventListener('click', slideOnClick); 
rightBtn.addEventListener('click', slideOnClick);

function slideOnClick() {
    let step = 1;
    if (this === leftBtn) {
        step = -1;
    }
    for (let i = 0; i < sliderCount; i++) {
        if (imageElms.item(i).classList.contains('slider__item_active') && dotElms.item(i).classList.contains('slider__dot_active')) {
            imageElms.item(i).classList.toggle('slider__item_active');
            dotElms.item(i).classList.toggle('slider__dot_active');
            let newIdx = i + step;
            if (newIdx < 0) {
                newIdx = sliderCount - 1;
            } 
            else if (newIdx === sliderCount) {
                newIdx = 0;
            }
            imageElms.item(newIdx).classList.toggle('slider__item_active');
            dotElms.item(newIdx).classList.toggle('slider__dot_active');
            return;
        }
    }
}

const dotElms = document.querySelectorAll(".slider__dot");
const countOfDots = dotElms.length;
for (let k = 0; k < countOfDots; k++) {
    dotElms.item(k).addEventListener('click', function() {
        let activeDot = document.querySelector(".slider__dot_active");
        let currentImage = document.querySelector(".slider__item_active");
        activeDot.classList.toggle("slider__dot_active");
        currentImage.classList.toggle("slider__item_active");
        dotElms.item(k).classList.toggle("slider__dot_active");
        imageElms.item(k).classList.toggle("slider__item_active");
        return;
    })
}

