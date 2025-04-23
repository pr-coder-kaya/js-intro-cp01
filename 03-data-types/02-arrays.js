// Arrays are used to store multiple similar data - collections

const names = ['John', 'Jane', 'Alex']; //

console.log(names); // [ 'John', 'Jane', 'Alex' ]

let size = names.length; // 3

console.log('Size of the array is', size);



// Why using const for arrays or objects or all the reference types 
let numbers = [1, 2, 5, 7];

numbers = 'Hello'; // this is allowed with let

console.log(numbers);


// Accessing, updating array elements
const mixData = [ 2, 'Hello', true, 5 > 10, 45.99, null, undefined, [1, 2, 3] ];

console.log(mixData.length); // 8

let secondElement = mixData[1];

console.log(secondElement); // Hello

// retrieve first and last element in an array
mixData[0]; // always returns the first element in the array
mixData[mixData.length - 1]; // always returns the last element in the array



const cities = [ 'Chicago', 'Berlin', 'Miami' ];
console.log(cities[5]); // undefined
console.log(cities[-10]); // undefined


// Another way to create an array is using Array constructor
const arr1 = new Array(); // empty array
const arr2 = []; // empty array

const arr3 = new Array('Hello', 'Hi', 'John');
console.log(arr3);
console.log(arr3.length);

console.log(typeof []); // 'object'
console.log(typeof arr3); // 'object'


const nums = [100, 300, 1000];

nums[1] = 1;

console.log(nums);