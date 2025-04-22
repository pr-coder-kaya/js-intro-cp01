// declaration - assignment 


let age; // undefined

age = 25; // assignment 

age = 26; // re-assignment 



// Hoisting - moving the declaration of variables always to the top of the file 

console.log(myAddress); // ReferenceError: myAddress is not defined

var myAddress = '123 street';

/*
JS interprets this differently with hoisting

var myAddress; // undefined
console.log(myAddress); // undefined
myAddress = '123 street';
*/

// let and const are not hoisted
console.log(myFavDish); // ReferenceError: Cannot access 'myFavDish' before initialization

let myFavDish = 'Salad';



// We'll use let and const to declare, assign and initialize our variables
// let for variables that we may reassign values: numbers, strings, booleans
// const for variables that we will not reassign values: arrays, functions, objects, and constant datas
