// String is used to store text data

let fname = 'John';
let lname = 'Doe';

// Concatenate multiple strings
let fullname1 = fname + ' ' + lname;

// After ES6 - String Templates are introduced
let fullname2 = `${fname} ${lname}`;

console.log(`I
can
do
it`);

// You can use interpolation for embedding code expressions
let price = 10.99;
let quantity = 5;

console.log(`The total is = $${price * quantity}`);