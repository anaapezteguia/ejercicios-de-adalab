'use strict';
// 1a- elemento de HTML
const button = document.querySelector('.alert');

// 1b- handler
function showAlert() {
  console.log('Alerta');
}

// 1c- listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);

//2- declarando la función cuando la pasamos como argumento
const button = document.querySelector('.alert');
button.addEventListener('click', function showAlert() {
  console.log('alerta');
});

//3- ahora con arrow function
const button = document.querySelector('.alert');
button.addEventListener('click', () => console.log('alerta'));