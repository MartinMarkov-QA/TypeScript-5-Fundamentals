console.log('For loop results:');


for (let index = 1; index < 10; index++) {
    if (index % 2 === 0) {
        console.log(`Number ${index} is even`);
    }   else {
        console.log((`Number ${index} is odd`));   
    }
}

console.log('While loop results:');

let startNumber: number = 1;

while (startNumber < 10) {
    if (startNumber % 2 === 0) {
        console.log(`Number ${startNumber} is even`);
    }   else {
        console.log((`Number ${startNumber} is odd`));   
    }

    startNumber++
}

console.log('Switch results:');

let fruit: string = 'Orange';

switch (fruit) {
    case 'Orange':
        console.log('The fruit is tropical');
        break;
    case 'Apple':
        console.log('The fruit is not tropical');
        break;
    default:
        console.log('Not known fruit');
        break;
}