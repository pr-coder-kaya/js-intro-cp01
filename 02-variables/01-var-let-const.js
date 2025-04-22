
// Before ES6 - there was only var keyword to define-declare variables

var program = 'SDET Program';
var number = 1;
var isStarted = true;
var cost = 5000;
var students = ['John', 'Jane', 'Mary'];

var address = {
    street: '123 abc street',
    city: 'Chicago',
    state: 'IL',
    ZIP: 12345
};


// After ES6 - var is replaced with let

let myName = 'John'; // defining a variable - declaring and initializing a variable
let myAge = 25;

myName = 'Alex'; // re-assigning a new value to an existing variable

console.log(myName);


// Also const added with ES6 and it is used to store constants
const pi = 3.14;
const monthInAYear = 12;

monthInAYear = 15; // TypeError: Assignment to constant variable.