"use strict";
class Human {
    constructor(humanName) {
        console.log(`I am Human ${humanName} called from the parent constructor.`);
    }
    walk() {
        console.log('The Human is walking');
    }
}
class Man extends Human {
    constructor(manName) {
        super(manName);
        this.manName = manName;
    }
    walk() {
        super.walk();
        return 45;
    }
}
let martin = new Man('Martin');
console.log(martin.walk());
