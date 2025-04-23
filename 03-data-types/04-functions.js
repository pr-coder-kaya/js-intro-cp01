/*
Js functions are used to run a block of code to increase reusability

Traitional Syntax:
function funcName(params) {
    // code block
}
*/

// void function: does not return a value
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('John'); // Hello, John!
greet(); // Hello, undefined!
greet('Jane', 'Alex'); // Hello, Jane!
greet(true);
greet(25);


// return function: it returns a value
function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(1, 4));

let result = sum(4, 3);
console.log(result);


/**
 * @param {*} arr is an array numbers
 * @returns the sum of the elements of the given array
 */
function sumElements(arr) {
    let result = 0;
    for(const el of arr) {
        result += el;
    }
    return result;
}

console.log(sumElements([1, 2, 3]));
console.log(sumElements([1, 2, 3, 10]));