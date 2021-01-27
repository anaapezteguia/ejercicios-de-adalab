'use strict';
// // mi array
const numbers = [5, 3, 8, 33, 64]; 

// //mi variable acumulador
let counter =0;

// // A
// //mi bucle
for (let i = 0; i < numbers.length; i++) {
    counter += numbers[i];
    // console.log(counter);
}

// // hallamos la media
let myAverage = counter/numbers.length;
console.log(`La media de mis números es ${myAverage}`);

// // B
// // añadimos un número al array y aumentamos el divisor
numbers[5] = 9;
// console.log(numbers);


// // repetimos el bucle
counter=0;
for (let i = 0; i < numbers.length; i++) {
    counter += numbers[i];
    // console.log(numbers.length);
}
// // y la media
 myAverage = counter/numbers.length;
console.log(`Ahora la media de mis números es ${myAverage}`);

// C
// convertimos la media en función
const average = (myAverage) => {
    const numbers = [5, 3, 8, 33, 64]; 
    numbers[5] = 9;
    // console.log(numbers);
    let counter = 0;
    for (let i = 0; i < numbers.length; i++) {
        counter += numbers[i];
    }
    // console.log(counter);
    myAverage = counter/numbers.length;
    return myAverage;
}
console.log('Y finalmente, con una función arrow, mi media es ' + average());