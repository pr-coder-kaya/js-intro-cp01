const randomNumberGenerator = require('./../utils/numberGenerator');

/*
Generate a random number between 1 and 100
And find if it is in the first half or the second half
*/

const ran = randomNumberGenerator(1, 100);
console.log(`The random number is ${ran}`);

if(ran <= 50) {
    console.log('First half');
}
else {
    console.log('Second half');
}