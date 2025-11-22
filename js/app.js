"use strict";
// Interface for function types
let movieIdGenerator = (movieName, movieNumber) => {
    return movieName + movieNumber;
};
console.log(movieIdGenerator('Star Wars', 17));
