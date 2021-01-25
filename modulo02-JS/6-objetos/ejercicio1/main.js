'use strict';
const pStatement = document.querySelector('.js-statement');

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';

const adalaber2 = {};
adalaber2.name = 'Rocío';
adalaber2.age = 25;
adalaber2.job = 'actriz';

const pStatement2 = document.querySelector('.js-statement2');

// Muestra en la web la frase 1
pStatement.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}.`;

// Muestra la frase 2
function createAnswer() {
    const answer = `<p>Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.</p>`;
    pStatement2.innerHTML = answer;
}
pStatement.addEventListener ('mouseover', createAnswer);