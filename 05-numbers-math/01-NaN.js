console.log(NaN); // NaN
console.log(typeof NaN); // 'number'

console.log('10' / 2); // 5
console.log('10 apples' * 2); // NaN


let v1 = 5;
let v2 = 'five';

// isNaN() is a global method can be accessed anywhere to check if a variable value is not a number
console.log(isNaN(v1)); // false
console.log(isNaN(v2)); // true