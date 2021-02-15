'use strict';
const btnElement = document.querySelector('.btn');
function test() {
    
    let counter = 0;

    const incrementAndShowCounter = () => {
        counter++;
        const time = document.querySelector('.time');
        time.innerHTML = counter;
        if (counter >= 13) {
            time.innerHTML = '';
        }
    };

  setInterval(incrementAndShowCounter, 1000);
}
btnElement.addEventListener('click', test);

// function test() {
    
//     let counter = 0;
//     let temp;

//     const incrementAndShowCounter = () => {
//         counter++;
//         const time = document.querySelector('.time');
//         time.innerHTML = counter;
//         if (counter === 12) {
//             clearInterval(temp);
//         }
//     };

//     temp = setInterval(incrementAndShowCounter, 1000);
// }

// btnElement.addEventListener('click', test);