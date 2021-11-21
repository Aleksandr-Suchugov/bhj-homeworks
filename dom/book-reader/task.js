const textSize = document.querySelectorAll('div.book__control_font-size > .font-size');
textSize[1].dataset.size = 'original';
const controlBtns = document.querySelectorAll('div.book__controls > div');
const contentBox = document.querySelector('div.book__content');

for (let styleBtn of controlBtns) {
    styleBtn.addEventListener('click', function(event){
        event.preventDefault();
        let keyStyles = event.target.dataset;
        for (let value in keyStyles) {
            if (value ==='textColor') {
                let actualTextcolor = document.querySelector('div.book__control_color > .color_active');
                actualTextcolor.classList.remove('color_active');
                event.target.classList.add('color_active');
                contentBox.style.color = keyStyles[value];
            }
            if (value === 'bgColor') {
                let actualBackGroundColor = document.querySelector('div.book__control_background > .color_active');
                actualBackGroundColor.classList.remove('color_active');
                event.target.classList.add('color_active');
                contentBox.style.backgroundColor = keyStyles[value];
            }
            if (value === 'size') {
                let actualTextSize = document.querySelector('.font-size_active');
                actualTextSize.classList.remove('font-size_active');
                event.target.classList.add('font-size_active');
                contentBox.style.fontSize = keyStyles[value];
            }
        }
        
    });
}


/*
const textColor = document.querySelectorAll('div.book__control_color > .color');
const backGraundColor = document.querySelectorAll('div.book__control_background > .color');

textSize[0].parentElement.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.font-size_active').classList.remove('font-size_active');
    event.target.classList.add('font-size_active');
    if (event.target.getAttribute('data-size')) {
        contentBox.style.fontSize = event.target.getAttribute('data-size');
    }
    else {
        contentBox.style.fontSize = '16px';
    }
});

textColor[0].parentElement.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('div.book__control_color > .color_active').classList.remove('color_active');
    event.target.classList.add('color_active');
    contentBox.style.color = event.target.getAttribute('data-text-color');;
});

backGraundColor[0].parentElement.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('div.book__control_background > .color_active').classList.remove('color_active');
    event.target.classList.add('color_active');
    contentBox.style.backgroundColor = event.target.getAttribute('data-bg-color');
});
*/