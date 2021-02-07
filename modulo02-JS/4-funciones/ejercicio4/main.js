'use strict';
const inputElement = document.querySelector('.js-number');
const btnElement = document.querySelector('.js-btn');
const resultElement = document.querySelector('.js-result');
let sentence = '';


function evenOrOdd(ev) {
    ev.preventDefault();
    const number = parseInt(inputElement.value);
    if (number % 2 === 0) {
        sentence = `${number} es par`;
    } else {
        sentence =`${number} es impar`;
    }
    resultElement.innerHTML = sentence;
}
btnElement.addEventListener('click', evenOrOdd);
