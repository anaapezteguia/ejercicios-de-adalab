'use strict';
const numbers = [1, 2, 3];
const ulElement = document.querySelector('.js-list'); //ul

// creando con DOM
function addLi() {
    for (let index = 0; index < numbers.length; index++) {
        let element = numbers[index];
        const liElement = document.createElement('li');
        const newContent = document.createTextNode(element);
        liElement.appendChild(newContent);
        ulElement.appendChild(liElement);
    }
}
addLi();

