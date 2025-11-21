// Interface

interface Bird {
    birdType: string;
    birdWeight: number;
    howToFly(howItFly: string): void;
}

class Duck implements Bird{
    birdType = 'Duck';
    birdWeight = 3.25;

    howToFly(howItFly: string): void {
        console.log(howItFly);
    }
}

let duckOne: Duck = new Duck;

duckOne.howToFly('I am flying easy');
console.log(duckOne.birdWeight);

