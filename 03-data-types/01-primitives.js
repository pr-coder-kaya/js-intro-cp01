// numbers
let num1 = 1; // whole/absolute number
let num2 = 5.3; // decimal/floating number

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// The numbers bigger than MAX_SAFE_INTEGER (9007199254740991) or less than MIN_SAFE_INTEGER (-9007199254740991)
// must be stord as bigint
let num3 = 9007199254740999n;

console.log('Num3 is =', num3); // 9007199254740999n

let num4 = BigInt(98325679238659286359823659827359836457n);
console.log(num4); // 98325679238659286359823659827359836457n


// strings 
let fname = 'John';


// booleans
let b1 = true;
let b2 = false;


// undefined
let myVar1; // undefined
let myVar2 = undefined;


// null
let street1 = '123 Street';
let street2 = null; // absence of data


// Symbol
let s1 = Symbol('foo');


// typeof operator is used to find what the data type of variable is

let age = 25;

console.log(age);
console.log(typeof age); // number

console.log(typeof ''); // string
console.log(typeof 'Hello'); // string

console.log(typeof true); // boolean
console.log(typeof false); // boolean

console.log(typeof 5 > 2); // boolean

console.log(typeof (typeof 25)); // 'string'

console.log(typeof 'number'); // string