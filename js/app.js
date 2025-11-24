"use strict";
// Classes 
class Car {
    constructor(carName, carSpeed) {
        this.carName = carName;
        this.carSpeed = carSpeed;
    }
    ;
    drive() {
        console.log(`I am driving ${this.carName} with ${this.carSpeed} km/h.`);
    }
}
Car.classType = 'Car';
const mercedes = new Car('Mercedes', 187);
mercedes.drive();
console.log(Car.classType);
