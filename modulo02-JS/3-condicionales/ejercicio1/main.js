'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
let userAvatar = 'http://www.fillmurray.com/300/300';

const imgPlaceholder = document.querySelector('.user__avatar');

imgPlaceholder.src = userAvatar;
console.log ("Este es mi amigo Bill.");

userAvatar ="";
imgPlaceholder.src = userAvatar;
console.log ("Te falta añadir una foto colega!");

imgPlaceholder.src= `${userAvatar || DEFAULT_AVATAR}`;
console.log  ('Esta es la imagen por defecto que nos quedaría.');