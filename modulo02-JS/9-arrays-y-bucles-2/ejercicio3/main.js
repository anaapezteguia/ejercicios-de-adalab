'use strict';
const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNomber(){
    const evenArray = [];
    const multiple3 = [];
    for (let i = 0; i < lostNumbers.length; i++) {
        let myNumber = lostNumbers[i];
        if (myNumber % 2 === 0) {
            evenArray.push(myNumber);
        } else if (myNumber % 3 === 0){
           multiple3.push(myNumber);
        } 
    }
    console.log(evenArray);
    console.log(multiple3);
    const result = evenArray.concat(multiple3);
    console.log(result);
}
bestLostNomber();
