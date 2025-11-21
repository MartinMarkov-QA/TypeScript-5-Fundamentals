"use strict";
// Function Overload 
const movies = [
    { movieTitle: 'One', author: 'Jeff', streaming: false },
    { movieTitle: 'Two', author: 'Alex', streaming: true },
    { movieTitle: 'Three', author: 'Jeff', streaming: true },
    { movieTitle: 'Four', author: 'Alex', streaming: false },
    { movieTitle: 'Five', author: 'Jeff', streaming: true },
];
// Function implementation
function getMoviesTitles(author, streaming) {
    let movieTitles = [];
    if (streaming !== undefined) {
        for (const movie of movies) {
            if (movie.author === author && streaming === movie.streaming) {
                movieTitles.push(movie.movieTitle);
            }
        }
    }
    else {
        for (const movie of movies) {
            if (author === movie.author) {
                movieTitles.push(movie.movieTitle);
            }
        }
    }
    return movieTitles;
}
let results = getMoviesTitles('Jeff', true);
for (const result of results) {
    console.log(result);
}
