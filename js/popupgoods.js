let popupgoods = document.querySelector('.popup-goods');
let addInCart = document.querySelectorAll('.add-to-cart');
let closePopupgoods = popupgoods.querySelector('.closed-popupgoods');
let proceed = popupgoods.querySelector('.button-proceed');




for (let i = 0; i < addInCart.length; i++) {
    addInCart[i].addEventListener('click', function() {
        popupgoods.classList.add('modal--show');
        popupgoods.classList.add('modalshow');
    });
}


closePopupgoods.addEventListener('click', function() {
    popupgoods.classList.remove('modal--show');
    popupgoods.classList.remove('modalshow');
});



window.addEventListener('keydown', function(evt){
    if(evt.keyCode === 27){
        popupgoods.classList.remove('modal--show');
        popupgoods.classList.remove('modalshow');
    }
});

proceed.addEventListener('click', function() {
    popupgoods.classList.remove('modal--show');
    popupgoods.classList.remove('modalshow');
});