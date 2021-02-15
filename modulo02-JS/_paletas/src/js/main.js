'use strict';
const paletteContainer = document.querySelector('.js-palettes-container');
const formElement = document.querySelector('.js-form');
const filterInput = document.querySelector('.js-filter');

// ---------ARRAYS------------
//Creamos arrays vacíos para almacenar las paletas
let palettes = [];
let favouritePalettes = [];

// ---------LLAMADA A API Y LOCAL STORAGE------------
//llamamos a la API
function getPalettes() {
  fetch('https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json')
    .then((response) => response.json())
    .then((data) => {
      palettes = data.palettes;
      // console.log(palettes);
      createPalettes();
      saveInLocalStorage();
    });
}
//convertimos en string las paletas y las guardamos en Local Storage
function saveInLocalStorage() {
  const savedPalettes = JSON.stringify(palettes);
  localStorage.setItem('palettes', savedPalettes);
}
// COMPROBAMOS y/o recogemos datos de Local Storage
function getFromLocalStorage() {
  const localStoragePalettes = JSON.parse(localStorage.getItem('palettes'));
  if (localStoragePalettes === null) { //si localStorage está vacío, fetch
    getPalettes();
    createPalettes();
  } else {//si no, parseamos y metemos en el array
    const palettesArray = JSON.parse(savedPalettes); 
    palettes = palettesArray;
    createPalettes();
  }
}

// ---------FILTRO------------
function handleFilter() {


  createPalettes();
}
filterInput.addEventListener('keyup', handleFilter);


// ---------ENVIO FORM------------
function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

// ---------PINTAR PALETAS EN HTML------------
function createPalettes() {
  let htmlCode = '';
  for (const paletteItem of palettes) {
    htmlCode += '<li class="palette js-palette">';
    htmlCode += `<h2 class="palette__title">${paletteItem.name}</h2>`;
    htmlCode += '<div class="palette__colors">';
    for (const item of paletteItem.colors) {
      htmlCode += `<div class="color__item" style="background-color:#${item}"></div>`;
    }
    htmlCode += '</div></li>';
  }
  paletteContainer.innerHTML = htmlCode;
}


// ---------PINTAR FAVORITAS------------

// const selectedPalette = document.querySelectorAll('.js-palette');
// for (const pickedPalette of selectedPalettes) {
//   pickedPalette.addEventListener('click', selectedHandler);
// console.log(pickedPalette);
// }

// function selectedHandler(ev) {
//   const selected = ev.currentTarget;
//   if(selected === pickedPalette){
//     selected.classList.toggle('.palette--favorite');
//   } else {
//     selected.classList.remove('.palette--favorite');
//   }
// }


// ---------INICIALIZAR APP COMPROBANDO------------
getFromLocalStorage();
