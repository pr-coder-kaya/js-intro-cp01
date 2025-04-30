const arr = []; // empty array
const arr2 = new Array(); // empty array


const numbers = [];

// add elements using push (adds to the end) or unshift (adds to the start) methods
numbers.push(10); // return 1
numbers.push(20); // return 2

const newSize = numbers.push(30, 40, 50); // return 5
console.log(newSize);

numbers.unshift(99); // return 6
numbers.unshift(100, 101); // return 8


console.log(numbers);


// remove elements using pop (removes from the end) or shift (removes from the start)
numbers.pop(); // return last element
console.log(numbers);

numbers.shift(); // return first element
console.log(numbers);


/*
These methods are instance methods
These methods modifies the original array
*/

// unshift is longer than shift
