'use strict';
const myUser = 'Sara';
const myFriend = 'Ana';
const h3User = document.querySelector('.user__name');
const selectedUser = h3User.innerHTML;
const pUserAnswer = document.querySelector('.user__text');

if ((selectedUser === myUser) || (selectedUser === myFriend)) {
    pUserAnswer.innerHTML = `¡Bienvenida, ${myUser}!`;
}
else {
    pUserAnswer.innerHTML = 'Lo siento pero el usuario que has introducido no está registrado.';
}