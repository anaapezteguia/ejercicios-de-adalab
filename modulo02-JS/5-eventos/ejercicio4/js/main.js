'use strict';
const myBg = document.querySelector('.js-body');


function changeBg () {
    const myScroll = window.scrollY;
    if (myScroll <= 250) {
        myBg.classList.add('bg-small');
        myBg.classList.remove('bg-big');
    } else {
        myBg.classList.add('bg-big');
        myBg.classList.remove('bg-small');
    }
    console.log (myScroll);
}

window.addEventListener('scroll', changeBg);