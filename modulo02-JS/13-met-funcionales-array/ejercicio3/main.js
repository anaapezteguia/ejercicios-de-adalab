'use strict';
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
  ];
// const premiumUsers = [];
// const plainUsers = [];

// for (const member of users) {
//     // console.log(member.isPremium);
//     if (!!member.isPremium) {
//         plainUsers.push(`Bienvenida ${member.name}`);//María, Rocío, Inmaculada
//     } else {
//         premiumUsers.push(`Bienvenida ${member.name}. Gracias por confiar en nosotros.`);//Lucía, Susana
//     }
// }
const premiumUsers = users.map((member) => member.isPremium
? `Bienvenida ${member.name}. Gracias por confiar en nosotros.`:`Bienvenida ${member.name}`);
console.log(premiumUsers);
