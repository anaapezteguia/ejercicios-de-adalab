'use strict';
const firstDogYear = 15;
const secondDogYear = 9;
const nextDogYears = 5;
let dogYears = 0;
const spanHumanYears = document.querySelector('.js-conversor');
const humanYears = parseInt (spanHumanYears.innerHTML);
let myDoggyAge = humanYears - dogYears;
const pResult = document.querySelector('.js-result');

//menos de 15 años
if (humanYears < firstDogYear ) { 
    myDoggyAge = 0;
    pResult.innerHTML= `Tienes ${myDoggyAge} años perrunos.`;
}
//entre 15 y 24 años
else if ((humanYears >= firstDogYear) && (humanYears < (firstDogYear + secondDogYear)) ) {
    myDoggyAge = 1;
    pResult.innerHTML= `Tienes ${myDoggyAge} año perruno.`;
}
// más de 24 años
else if (humanYears >= (firstDogYear + secondDogYear)) {
    dogYears = firstDogYear + secondDogYear;
    myDoggyAge = (humanYears - dogYears)/5 + 2;
    pResult.innerHTML= `Tienes ${myDoggyAge} años perrunos.`;
}