// Classes 

class Human {

    private _age: number = 0;

    get age(): number {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    constructor(public gender: string, public name: string) {
        console.log(`The human has been created.`);
    }

    public walk(): void {
        console.log(`The man is walking.`);
    }
}

let martin: Human = new Human('Man', 'Martin');
martin.age = 45;
console.log(martin.age);
martin.walk();






