let slider_main = document.querySelector('.subdirectory-slider');
let slider_back = slider_main.querySelector('.slider-button-back');
let slider_next = slider_main.querySelector('.slider-button-next');

let buttonControl = slider_main.querySelector('.button-control');
let buttonDicor = buttonControl.querySelectorAll('button');

let rectangle = slider_main.querySelectorAll('.rectangle');



slider_back.addEventListener('click', function(){
    if(!slider_main.classList.contains('subdirectory-slider-first')){
        slider_main.classList.remove('subdirectory-slider-second');
        slider_main.classList.add('subdirectory-slider-first');
        for (let k = 0; k < buttonDicor.length; k++) {
            buttonDicor[k].classList.remove('current');
        }
        buttonDicor[0].classList.add('current');
        rectangle[0].classList.remove('visually-hidden');
        rectangle[1].classList.add('visually-hidden');
    }
});

for (let i = 0; i < buttonDicor.length; i++) {
    buttonDicor[i].addEventListener('click', function(){
        if(!slider_main.classList.contains('subdirectory-slider-first')){
            slider_main.classList.remove('subdirectory-slider-second');
            slider_main.classList.add('subdirectory-slider-first');
            for (let k = 0; k < buttonDicor.length; k++) {
                buttonDicor[k].classList.remove('current');
            }
            buttonDicor[i].classList.add('current');
            rectangle[0].classList.remove('visually-hidden');
            rectangle[1].classList.add('visually-hidden');

        } else {
            slider_main.classList.remove('subdirectory-slider-first');
            slider_main.classList.add('subdirectory-slider-second');
            for (let k = 0; k < buttonDicor.length; k++) {
                buttonDicor[k].classList.remove('current');
            }
            buttonDicor[i].classList.add('current');
            rectangle[1].classList.remove('visually-hidden');
            rectangle[0].classList.add('visually-hidden');
        }
    });
}


slider_next.addEventListener('click', function(){
    if(!slider_main.classList.contains('subdirectory-slider-second')){
        slider_main.classList.remove('subdirectory-slider-first');
        slider_main.classList.add('subdirectory-slider-second');
        for (let k = 0; k < buttonDicor.length; k++) {
            buttonDicor[k].classList.remove('current');
        }
        buttonDicor[1].classList.add('current');
        rectangle[1].classList.remove('visually-hidden');
        rectangle[0].classList.add('visually-hidden');
    }
});
