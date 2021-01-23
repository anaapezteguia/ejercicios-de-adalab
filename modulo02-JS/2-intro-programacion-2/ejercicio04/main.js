'use strict';
const totalPersonas= 9;
const totalCuenta= 128;
const pagarEscote = (totalCuenta-2)/9;
const pagarAna = pagarEscote +2;
console.log('Cada uno pagará '+ pagarEscote + '€, menos Ana, que deberá pagar ' + pagarAna + '€ por tomar sake.');