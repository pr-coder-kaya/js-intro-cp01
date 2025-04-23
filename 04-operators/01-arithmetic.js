let n1 = 5;
let n2 = 3;

console.log(n1 + n2); // 8
console.log(n1 * n2); // 15
console.log(n1 ** n2); // 125
console.log(6 / n2); // 2
console.log(n1 % n2); // 2
console.log(n2 % n1); // 3
console.log(10 % n1); // 0
console.log(n1 % n1); // 0

console.log(n1 - n2); // 2

let n3 = '7';
let n4 = '2';
let n5 = 4;
let n6 = 3;

console.log(n3 + n5); // '74'
console.log(n4 - n6); // -1
console.log(n5 + n6 + n4 + n3); // '727'

console.log('3' * '2'); // 6
console.log('abc' * 5); // NaN 

console.log('3' + 5 + 2); // '352'
console.log('3' + (5 + 2)); // '37'
console.log(Number('3') + 5 + 2); // 10
console.log(parseInt('3') + 5 + 2); // 10

console.log('3' - 2); // 1
console.log('abc' - 2); // NaN

console.log(true + 1); // 2
console.log(false + 1); // 1