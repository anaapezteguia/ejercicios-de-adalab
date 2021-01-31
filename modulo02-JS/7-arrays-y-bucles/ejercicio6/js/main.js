'use strict';
const film1Element = document.querySelector('.js-film1');
const film2Element = document.querySelector('.js-film2');
const buttonElement = document.querySelector('.js-btn');
const sentenceElement = document.querySelector('.js-sentence');

let movies = [];
// console.log (movies);


 function handleMovies () {
    movies[0] = film1Element.value;
    movies[1] = film2Element.value;
    console.log (movies);

    if (!movies[0] || !movies[1]) {
        sentenceElement.innerHTML ="Te digo que escribas 2 pelis tostón";
      }
      if (movies[0] === movies[1]) {
        sentenceElement.innerHTML ="No vale repetir ;)";
      }
      for (const film of movies) {
        sentenceElement.innerHTML = `¡A mí también me encantó "${film}"! Tenemos mucho en común, humana.`
      }
 }
 
buttonElement.addEventListener ('click', handleMovies);






