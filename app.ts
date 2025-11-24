// Classes 

class Car {
    constructor(public carName: string, public carSpeed: number) {};

    static classType: string = 'Car';

    public drive(): void {
        console.log(`I am driving ${this.carName} with ${this.carSpeed} km/h.`);
    }
}

const mercedes = new Car('Mercedes', 187);
mercedes.drive();

console.log(Car.classType);





