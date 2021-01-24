'use strict';
const button = document.querySelector('.js-btn');
const text = document.querySelector('.js-text');

// handler
function changeText() {
  text.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
}

// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', changeText);