let buttons = document.querySelectorAll('.services-item');
let slider = document.querySelectorAll('.opredelenie');

for (let i = 0; i < buttons.length; i++) {
    let openslider = buttons[i];
    openslider.addEventListener('click', function() {
        let focusbutton = document.querySelector('.current-button');
        focusbutton.classList.remove('current-button');
        openslider.classList.add('current-button');
        for (let k = 0; k < slider.length; k++) {
            if(!slider[k].classList.contains('visually-hidden-all')){
                slider[k].classList.add('visually-hidden-all');
            }
        }
        slider[i].classList.remove('visually-hidden-all');
    });
}

