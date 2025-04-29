const randomNumberGenerator = require('./../utils/numberGenerator');

const r1 = randomNumberGenerator(5, 12);

console.log(`The random number is = ${r1}`);

// Find if the generated number has 1 or 2 digits
if(r1 < 10) {
    console.log('This number has 1 digit');
}
else {
    console.log('This number has 2 digits');
}


const r2 = randomNumberGenerator(-3, 3); 

// Find if r2 is pos, neg or neutral
console.log(`The random number is = ${r2}`);

if(r2 > 0) console.log('POS');
else if(r2 < 0) console.log('NEG');
else console.log('NEUTRAL');

if(r2 < 0 ) {
    console.log('NEG');
}
else {
    if(r2 > 0) console.log('POS');
    else console.log('NEUTRAL');
}