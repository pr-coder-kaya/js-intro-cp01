const randomNumberGenerator = require('./../utils/numberGenerator');

// Keep generating a number between 1 and 10 until you get 5
let ran;
let attempt = 0;

do {
    ran = randomNumberGenerator(1, 10);
    attempt++;
    console.log(ran);
} while (ran !== 5);

console.log(`We got 5 after ${attempt} time(s).`);

// while loop

let index = 0;

while(index < 5) {
    console.log(index);
    index++;
}

console.log('End of the program');



let start = 10;

do {
    console.log(start);
    start++;
} while(start <= 15);


// Difference
// while will check the condition and then run the block if it is true
// do-while first executes the block and then checks the condition
// do-while will at least runs once even though the condition is false for the first iteration 

while(false) {
    console.log('Hello');
}

do {
    console.log('Hello');
} while (false);

