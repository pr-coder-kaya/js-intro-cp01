// Math is a built-in object in JS which provides useful properties and methods
// Almost all of the Math properties and methods are static

console.log(Math.PI); // 3.141592653589793

// abs()
console.log(Math.abs(5));  // 5
console.log(Math.abs(-5)); // 5
console.log(Math.abs(5 - 20)); // 15


// max() vs min()
console.log(Math.max()); // -Infinity
console.log(Math.max(5)); // 5
console.log(Math.max(5, 10)); // 10
console.log(Math.max(5, 10, 15, 2)); // 15
console.log(Math.max(5, 10, 15, 2, 50)); // 50

console.log(Math.min()); // Infinity
console.log(Math.min(5)); // 5
console.log(Math.min(5, 10)); // 5
console.log(Math.min(5, 10, 15, 2)); // 2
console.log(Math.min(5, 10, 15, 2, 50)); // 2


// pow()
console.log(3 ** 4); // 81
console.log(Math.pow(3, 4)); // 81
console.log(Math.pow(5, 2)); // 25


// sqrt
console.log(Math.sqrt(64)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.sqrt(7)); // 2.6457513110645907


// trunc() vs floor() vs ceil() vs round()

console.log(Math.floor(10.99)); // 10
console.log(Math.ceil(10.01)); // 11

console.log(Math.trunc(10.99)); // 10
console.log(Math.trunc(10.01)); // 10

console.log(Math.round(10.49)); // 10
console.log(Math.round(10.50)); // 11
console.log(Math.round(10.51)); // 11


// random() - it returns a random number between 0 and 1 (0 inclusive and 1 exclusive)
console.log(Math.random()); // 