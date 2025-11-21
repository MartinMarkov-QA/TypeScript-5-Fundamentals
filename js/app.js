"use strict";
// Interface
class Duck {
    constructor() {
        this.birdType = 'Duck';
        this.birdWeight = 3.25;
    }
    howToFly(howItFly) {
        console.log(howItFly);
    }
}
let duckOne = new Duck;
duckOne.howToFly('I am flying easy');
console.log(duckOne.birdWeight);
