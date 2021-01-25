'use strict';
const myPage = document.querySelector('.js-body');
const text = document.querySelector('.js-message');


function changeBg (event) {
    let pressedKey = event.code;
    if (pressedKey === 'KeyR') {
        myPage.classList.add('red');
        //myPage.classList.remove('purple');
        text.innerHTML = 'BIEEEEEEN!!! Has pulsado la tecla R'
    } else if (pressedKey === 'KeyM'){
        myPage.classList.add('purple');
        // myPage.classList.remove('red');
        text.innerHTML = 'BIEEEEEEN!!! Has pulsado la tecla M'
    } else {
        text.classList.add('fontColor');
        text.innerHTML = 'La tecla pulsada no hace nada :('
    }
}

document.addEventListener('keyup', changeBg);