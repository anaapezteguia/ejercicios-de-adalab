'use strict';
const spanPrice = document.querySelector('.js-price');
const spanVat = document.querySelector('.js-vat');
const spanAmount = document.querySelector('.js-vatPrice');
const myPrice = parseInt(spanPrice.innerHTML);
const myVat = spanVat.innerHTML;
//const myAmount = spanAmount.innerHTML;
const vat = 0.21;
const appliedVat = vat* myPrice;
spanVat.innerHTML = appliedVat;

function sum (myPrice, appliedVat) {
    return myPrice + appliedVat;
}

spanAmount.innerHTML = sum (myPrice, appliedVat);