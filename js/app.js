"use strict";
// Classes 
class Human {
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    constructor(gender, name) {
        this.gender = gender;
        this.name = name;
        this._age = 0;
        console.log(`The human has been created.`);
    }
    walk() {
        console.log(`The man is walking.`);
    }
}
let martin = new Human('Man', 'Martin');
martin.age = 45;
console.log(martin.age);
martin.walk();
