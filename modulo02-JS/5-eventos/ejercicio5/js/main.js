'use strict';
const myPage = document.querySelector('.js-body');
const text = document.querySelector('.js-message');
text.classList.add('fontColor');

function changeBg (event) {
    let pressedKey = event.code;
    if (pressedKey === 'KeyR') {
        myPage.classList.add('red');
        text.classList.remove('fontColor');
        text.innerHTML = 'BIEEEEEEN!!! Has pulsado la tecla R'
    } else if (pressedKey === 'KeyM'){
        myPage.classList.add('purple');
        text.classList.remove('fontColor');
        text.innerHTML = 'BIEEEEEEN!!! Has pulsado la tecla M'
    } else {
        text.classList.add('fontColor');
        text.innerHTML = 'La tecla pulsada no hace nada :('
        myPage.classList.remove('red');
        myPage.classList.remove('purple');
    }
}

document.addEventListener('keyup', changeBg);