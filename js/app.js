"use strict";
// Function Types
// Function type 
let idGenerator;
// Function using the same signature as the type above
function movieIdGenerator(movieName, movieId) {
    return movieName + movieId;
}
idGenerator = movieIdGenerator;
let starWarsId = idGenerator('Star Wars', 17);
console.log(starWarsId);
