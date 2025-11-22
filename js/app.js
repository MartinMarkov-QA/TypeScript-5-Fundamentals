"use strict";
// Interface extending
let ferrari = {
    factoryNumber: 17,
    carType: 'Sport Car',
    maxSpeed: 189,
    drive(speed) {
        return speed;
    },
};
console.log(`The car factory number is ${ferrari.factoryNumber}. 
    The car type is ${ferrari.carType}. 
    The car max speed is ${ferrari.maxSpeed}.
    The car is currently driving with ${ferrari.drive(117)} km per hour`);
