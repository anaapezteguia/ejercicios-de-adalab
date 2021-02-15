'use strict'
const textElement = document.querySelector('.text');
let counter = 15;
const incrementAndShowCounter = () => {
    counter --;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
    if (counter === 0) {
        textElement.innerHTML = '';
    }
};

setInterval(incrementAndShowCounter, 1000);
const alert = () => {
    const boxAlert = document.querySelector('.box');
    boxAlert.classList.remove('hidden');
}
setTimeout(alert, 15000);


