const names = [ 'Max', 'Alex', 'John', 'Jane', 'James' ];

const subArray1 = names.slice(2, 4); 
const subArray2 = names.slice(1);
const subArray3 = names.slice(0, 2);
const subArray4 = names.slice(-3); // last 3 elements

// Get all the elements but first and last
const subArray5 = names.slice(1, -1);


console.log(subArray1); // [ 'John', 'Jane' ]
console.log(subArray2); // [ 'Alex', 'John', 'Jane', 'James' ]
console.log(subArray3); // [ 'Max', 'Alex' ]
console.log(subArray4); // [ 'John', 'Jane', 'James' ]
console.log(subArray5); // [ 'Alex', 'John', 'Jane' ]

console.log(names);