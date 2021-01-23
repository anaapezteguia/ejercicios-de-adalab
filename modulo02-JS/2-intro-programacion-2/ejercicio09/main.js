'use strict';
const miCompi = 'Sagra Mielgo';
const letras = miCompi.length;

const nombreCompi= document.querySelector('.js-compi');
const textToShow = `El nombre de mi compañera es ${miCompi}, y está compuesto por ${letras-1} caracteres.`;

nombreCompi.innerHTML = textToShow;
