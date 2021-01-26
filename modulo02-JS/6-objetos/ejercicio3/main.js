'use strict';
const pStatement = document.querySelector('.js-statement');

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';
adalaber.showBio = function () { 
    return `Mi nombre es `+ this.name +`, tengo `+this.age +` años y soy `+ this.job;
} 

pStatement.innerHTML = adalaber.showBio();

