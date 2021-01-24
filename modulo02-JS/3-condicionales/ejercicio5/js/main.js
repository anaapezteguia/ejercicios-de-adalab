'use strict';
const myNotice = document.querySelector('.myDiv');
const myTitle = document.querySelector('.title');
const myText = document.querySelector('.text');

//si tiene la clase success, bórrala
if (myNotice.classList.contains('success')) {
    myNotice.classList.remove('success');
//si no la tiene, ponla
} else {
    myNotice.classList.add('success');
    myTitle.innerHTML = 'CORRECTO';
    myText.innerHTML = 'Los datos son correctos.';
}
//si tiene la clase error, bórrala
if (myNotice.classList.contains('error')) {
    myNotice.classList.remove('error');
//si no la tiene, ponla
} else {
    myNotice.classList.add('error');
    myTitle.innerHTML = 'ERROR';
    myText.innerHTML = 'Ha surgido un error.';
}
//si tiene la clase warning, bórrala
if (myNotice.classList.contains('warning')) {
    myNotice.classList.remove('warning');
//si no la tiene, ponla
} else {
    myNotice.classList.add('warning');
    myTitle.innerHTML = 'AVISO';
    myText.innerHTML = 'Tenga cuidado.';
}