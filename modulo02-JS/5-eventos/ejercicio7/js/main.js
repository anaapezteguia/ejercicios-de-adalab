'use strict';
const myBtn = document.querySelector('.js-btn');

function changeBg() {
    // const myTarget = event.currentTarget;
    // console.log (myTarget);
    myBtn.classList.toggle('bg-pink');
}
myBtn.addEventListener('click', changeBg);