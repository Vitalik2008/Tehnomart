let feedback = document.querySelector('.feedback');
let openPopup = document.querySelector('.button-contacts');
let closePopup = feedback.querySelector('.closed');
let nick = feedback.querySelector("[class='name-input']");
let mail = feedback.querySelector('[type="email"]');
let message = feedback.querySelector('.text-input');
let form = feedback.querySelector('form');

//Проверка на localSelector

let isStorageSupport = true;
let storage = "";
let storageMail = "";

try {
  storage = localStorage.getItem("login");
  storageMail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}




/*Открытие popup*/
openPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal--show");
    feedback.classList.add("modalshow");
    
    if (storage) {
      nick.value = storage;
      if(storageMail){
        mail.value = storageMail;
        message.focus();
      }else{
        mail.focus();
      }
    } else {
      nick.focus();
    }
});






/*Закрытие popup*/
closePopup.addEventListener('click', function() {
  feedback.classList.remove('modalshow');
  feedback.classList.remove("modal-error");
  feedback.classList.remove('modal--show');
});


//Запись в хранилище значений
form.addEventListener("submit", function (evt) {
    if (!nick.value || !mail.value || !message.value) {
      evt.preventDefault();
      feedback.classList.remove("modalshow");
      feedback.classList.remove("modal-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", nick.value);
        localStorage.setItem("email", mail.value);
      }
    }
});


// Закрытие через ESC
document.addEventListener('keydown', function(evt){
    if(evt.keyCode===27){
        feedback.classList.remove('modal--show');
        feedback.classList.remove('modalshow');
    }
});

