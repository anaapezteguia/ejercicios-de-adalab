'use strict';
const selectElement = document.querySelector('.js-select'); 

// creando con DOM

const optionElement = document.createElement('option');
const madridContent = document.createTextNode('Madrid');
const parisContent = document.createTextNode('París');
const nyContent = document.createTextNode('New York');
optionElement.appendChild(madridContent);
// optionElement.appendChild(parisContent);
// optionElement.appendChild(nyContent);
const firstOption = selectElement.appendChild(optionElement);
const secondOption = document.getElementById('city').appendChild(parisContent);
const thirdOption = document.getElementById('city').appendChild(nyContent);
document.getElementById('city').insertBefore(parisContent, madridContent);
document.getElementById('city').insertBefore(nyContent, parisContent);

// Madrid
// https://www.hosteleriamadrid.com/wp-content/uploads/2020/03/cuatrotorres-2.png

// París
// https://www.bautrip.com/images/what-to-visit/museo-del-louvre.jpg

// New York
// https://www.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-m.jpg


        
