let price = '121.99';

// make sure the price more than 0
// calculate 10 percent discount


console.log(parseFloat(price)); // 121.27
console.log(parseInt(price)); // 121


// static methods of Number but we prefer above global JS methods
console.log(Number.parseFloat(price)); // 121.27
console.log(Number.parseInt(price)); // 121
console.log(Number(price));


// In case you need to check if a number you receive from servers, dbs, or websites
let quantity = 438976394876938465783;

console.log(Number.isSafeInteger(quantity)); // false
console.log(Number.isSafeInteger(10)); // true

console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.5)); // false

console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite(34756)); // true

isNaN();
parseInt();
parseFloat();