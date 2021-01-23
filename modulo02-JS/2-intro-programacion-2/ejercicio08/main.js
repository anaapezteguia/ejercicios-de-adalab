'use strict';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const nombrePerri1 = document.querySelector('.js-nombrePerri1');
const nombrePerri2 = document.querySelector('.js-nombrePerri2');
const nombrePerri3 = document.querySelector('.js-nombrePerri3');

const perri1 = document.querySelector('.js-perri1');
const perri2 = document.querySelector('.js-perri2');
const perri3 = document.querySelector('.js-perri3');

nombrePerri1.innerHTML = firstDogName;
perri1.src = firstDogImage;
perri1.alt = firstDogName;
nombrePerri2.innerHTML = secondDogName;
perri2.src = secondDogImage;
nombrePerri3.innerHTML = thirdDogName;
perri3.src = thirdDogImage;