'use strict';
const pEdad = document.querySelector('.js-miEdad');
const miEdad = parseInt(pEdad.innerHTML);
const horasAño = 365*24;
const spanResultado = document.querySelector('.js-resultado');
const horasVividas = miEdad*horasAño;
spanResultado.innerHTML = `Has vivido ${horasVividas} horas hasta hoy`;