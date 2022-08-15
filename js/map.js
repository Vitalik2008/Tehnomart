let map = document.querySelector('.mappopup');
let openMap = document.querySelector('.map');
let closeMap = map.querySelector('.closed-map');
let linkmap = document.querySelector('.maplink');

// Открытие карты
openMap.addEventListener('click', function(evt) {
    evt.preventDefault();

    map.classList.add('modal--show');
    map.classList.add("modalshow");
});


linkmap.addEventListener('click', function(evt) {
    evt.preventDefault();
});


// Закрытие карты
closeMap.addEventListener('click', function() {
    map.classList.remove('modal--show');
    map.classList.remove('modalshow');
});

// Закрытие через ESC
window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27){
        map.classList.remove('modal--show');
        map.classList.remove('modalshow');
    }
});

