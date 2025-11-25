abstract class Human {
    constructor(humanName: string) {
        console.log(`I am Human ${humanName} called from the parent constructor.`);
    }

    abstract talk(): void;

    protected walk(): void {
        console.log('The Human is walking');
    } 
}

class Man extends Human {
    talk() {
        console.log('I am talking');
    }
    constructor(private manName: string) {
        super(manName);
    }

    public walk(): number {
        super.walk();
        return 45;
    }
}

let martin = new Man('Martin');
console.log(martin.walk());
martin.talk();









