'use strict';
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const welcomedNames = [];

// for (let index = 0; index < names.length; index++) {
//     const girl = names[index];
//     welcomedNames.push(`Bienvenida ${girl}`);

// }

const welcomedNames = names.map((girl) => `Bienvenida ${girl}`);

console.log(welcomedNames);