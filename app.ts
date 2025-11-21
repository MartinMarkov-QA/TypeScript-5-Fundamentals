// Interface

interface Bird {
    birdType: string;
    birdWeight: number;
    howToFly(howItFly: string): void;
}

let myDuck: Bird = {
    birdType: "Duck",
    birdWeight: 3.25,
    howToFly:  (howItFly: string): void => {
        console.log(howItFly);
    }
};

myDuck.howToFly('MMM');


