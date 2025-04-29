// Ternary operator can be used for basic if else statements

let gender = 'girl';

let name = gender === 'boy' ? 'John' : 'Jane';

console.log(name);

// let name; 

// if(gender === 'boy') name = 'John';
// else name = 'Jane';

// console.log(name);


let num = 2;

num > 0 ? console.log('POS') : 
num < 0 ? console.log('NEG') :
console.log('NEUTRAL');

let result = num > 0 ? 'POS' 
            : num < 0 ? 'NEG'
            : 'NEUTRAL';

console.log(result); // 