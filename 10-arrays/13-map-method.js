// map() is another Array Higher Order Method
// map() method will always return new same size array

const numbers = [ 1, 3, 5, 20, 2 ];

// triple each array number: [ 3, 9, 15, 60 ]

const result = numbers.map(el => el * 3);

console.log(result); // [ 3, 9, 15, 60 ]






// const result = [];

// for(const el of numbers) {
//     result.push(el * 3);
// }

// console.log(result);