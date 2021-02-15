'use strict';
const textElement = document.querySelector('.text');

function incrementTime() {
    
    let segundos = 0;
    let minutos = 0;
    const incrementAndShowCounter = () => {
        segundos++;
        const textElement = document.querySelector('.text');
        textElement.innerHTML = `Escrito hace ${minutos}:${segundos} segundos`;
        if (segundos >59) {
            segundos = 0;
            minutos++;
            textElement.innerHTML = `Escrito hace ${minutos}:${segundos}  minutos`;
        }
    };

  setInterval(incrementAndShowCounter, 1000);
}
incrementTime();
