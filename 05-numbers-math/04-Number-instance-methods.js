
let n1 = 10.233532;

console.log(n1.toFixed(2));
console.log(n1.toPrecision(2));


let n2 = 10.6753;
console.log(n2.toFixed(1));
console.log(n2.toPrecision(3));

console.log(1 + 1); // 2
console.log((1).toString() + 1); // '11'

// These are non-static methods / instance methods
// The most useful one is toFixed()

let num1 = 10;
let num2 = 20;

console.log(num1.toString() + num2.toString()); // '1020'

let salary = 110000;

console.log((salary / 12).toFixed(2));
console.log((salary / 52).toFixed(2));



