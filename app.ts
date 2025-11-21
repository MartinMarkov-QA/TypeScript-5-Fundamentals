// Function Overload 
const movies = [
    { movieTitle: 'One', author: 'Jeff', streaming: false },
    { movieTitle: 'Two', author: 'Alex', streaming: true },
    { movieTitle: 'Three', author: 'Jeff', streaming: true },
    { movieTitle: 'Four', author: 'Alex', streaming: false },
    { movieTitle: 'Five', author: 'Jeff', streaming: true },
];

// Function signatures
function getMoviesTitles(author: string): string[];
function getMoviesTitles(author: string, streaming: boolean): string[];

// Function implementation
function getMoviesTitles(author: string, streaming?: boolean) {
    let movieTitles: string[] = [];

    if (streaming !== undefined) {
        for (const movie of movies) {
            if (movie.author === author && streaming === movie.streaming) {
                movieTitles.push(movie.movieTitle)
            }
        }

    } else {
        for (const movie of movies) {
            if (author === movie.author) {
                movieTitles.push(movie.movieTitle);
            }
        }
    }

    return movieTitles;
}

let results: string[] = getMoviesTitles('Jeff', true);

for (const result of results) {
    console.log(result);
}
