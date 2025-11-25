"use strict";
class Human {
    constructor(humanName) {
        console.log(`I am Human ${humanName} called from the parent constructor.`);
    }
    walk() {
        console.log('The Human is walking');
    }
}
let myClassExpression = class extends Human {
    talk() {
        console.log('I am Class Expression.');
    }
    showExpression() {
        console.log('This is from the Expression Class');
    }
};
let myClass = new myClassExpression('Martin');
myClass.talk();
myClass.showExpression();
