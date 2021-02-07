'use strict';
const marks = [5, 4, 6, 7, 9];
// const inflatedMarks = [];

// for (let index = 0; index < marks.length; index++) {
//     const number = marks[index];
//     inflatedMarks.push(number+1);

// }

const inflatedMarks = marks.map((number) => number+1);

console.log(inflatedMarks);