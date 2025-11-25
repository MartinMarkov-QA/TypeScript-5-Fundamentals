abstract class Human {
    constructor(humanName: string) {
        console.log(`I am Human ${humanName} called from the parent constructor.`);
    }

    abstract talk(): void;

    protected walk(): void {
        console.log('The Human is walking');
    } 
}



let myClassExpression = class extends Human {
    talk(): void {
        console.log('I am Class Expression.');
    }
    public showExpression(): void {
        console.log('This is from the Expression Class');
        
    }
}

let myClass = new myClassExpression('Martin');
myClass.talk();
myClass.showExpression();









