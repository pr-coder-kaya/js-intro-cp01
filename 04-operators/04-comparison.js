// <, >, <=, >=, ==, !=
// ===, !==

// === (strict) vs == (loose)
// strict equality checks if both data types and values of the variables are equal
// loose equality checks if only values of the variables are equal

console.log('3' == 3); // true
console.log('3' === 3); // false

console.log(true != 1); // false
console.log(true !== 1); // true

console.log(10 >= 10); // true
console.log(5 < 6); // true
console.log(2 * 3 > 7); // false 