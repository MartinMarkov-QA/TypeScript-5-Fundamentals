// Interface for function types

interface IdGenerator {
    (idName: string, idNumber: number): string
}

let movieIdGenerator: IdGenerator = (movieName, movieNumber) => {
    return movieName + movieNumber;
};

console.log(movieIdGenerator('Star Wars', 17));


