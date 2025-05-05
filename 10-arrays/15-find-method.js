const numbers = [ 1, 5, 0, -1, 10, -11 ];

// Find first even number   ->  0
// Find first neg number    ->  -1 

const firstEvenNum = numbers.find((num) => num % 2 === 0);
const firstEvenNumIndex = numbers.findIndex((num) => num % 2 === 0);


console.log(firstEvenNum, firstEvenNumIndex);


console.log(numbers.find(x => x < 0)); // -1
console.log(numbers.findIndex(x => x < 0)); // 3

// let firstEven;

// for(const el of numbers) {
//     if(el % 2 === 0) {
//         firstEven = el;
//         break;
//     }
// }

// console.log(firstEven);