'use strict';
const pStatement = document.querySelector('.js-statement');

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';
adalaber.run = action => `Estoy ${action}`
adalaber.runMarathon = distance => ` un maratón de ${distance} kilómetros.`


// Muestra en la web la frase 1
pStatement.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}.`;

console.log(adalaber.run('corriendo') + adalaber.runMarathon('50'));