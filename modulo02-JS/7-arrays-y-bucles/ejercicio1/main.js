'use strict';
// const arr = ['Lo que el viento se llevó', 'Algo pasa con Mary', 'Sentido y sensibilidad'];
// // añadimos una peli
// arr [3] = 'Orgullo y Prejuicio';
// console.log (arr);
// // modificamos un elemento
// arr[0] = 'Como agua para chocolate';
// console.log (arr);



function workWithMovies() {
    const movies = ['Lo que el viento se llevó', 'Algo pasa con Mary', 'Sentido y sensibilidad'];
    movies[3] = 'Orgullo y Prejuicio';
    console.log (movies);
    movies[0] = 'Como agua para chocolate';
    console.log (movies);
    // return movies;
}
workWithMovies();
// console.log(workWithMovies());

// REMEMBER!!!
// si no se pone return y ponemos console.log dentro de la función solo llamar fuera a la función, 
// ELSE
// poner return!!!!!!!!!!!!!