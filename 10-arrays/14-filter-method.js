// filter() is another Array Higher Order Method
// filter() method usually returns new-smaller size array

const numbers = [ 1, 3, 5, 20, 2, 13 ];

// get all the odd numbers in a new array: [ 1, 3, 5, 13 ]
const odds = numbers.filter(el => el % 2 !== 0);

console.log(odds);


// get all the numbers greater than 100 -> []
// get all the numbers less than 100 -> [ 1, 3, 5, 20, 2, 13 ]

console.log(numbers.filter(x => x > 100)); // []
console.log(numbers.filter(x => x < 100)); // [ 1, 3, 5, 20, 2, 13 ]


// let odds = [];

// for(const el of numbers) {
//     if(el % 2 !== 0) odds.push(el);
// }

// console.log(odds);