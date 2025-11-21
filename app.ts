// Function Types

// Function type 
let idGenerator: (name: string, id: number) => string;

// Function using the same signature as the type above
function movieIdGenerator(movieName: string, movieId: number): string {
    return movieName + movieId;
}

idGenerator = movieIdGenerator;

let starWarsId = idGenerator('Star Wars', 17);

console.log(starWarsId);

