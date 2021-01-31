'use strict';
const numbers = [];

function getReversed100Numbers (){
    for (let i = 1; i < 101; i++) {
        numbers.push(i);
    }
}
getReversed100Numbers();
console.log(numbers.reverse());