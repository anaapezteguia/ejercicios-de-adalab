'use strict';
'use strict';
const button = document.querySelector('.js-btn');
const urName = document.querySelector('.js-myName');
const text = document.querySelector('.js-text');

function sayHi() {
  text.innerHTML = `Hola ${urName.value}`;
}
button.addEventListener('click', sayHi);