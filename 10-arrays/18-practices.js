const numbers = [15, 3, 2, 10, 5, 4];

// Find the sum of even numbers     -> 16

const evenSum1 = numbers.filter(x => x % 2 === 0).reduce((acc, curr) => acc + curr);

const evenSum2 = numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + curr : acc, 0);

console.log(evenSum1);
console.log(evenSum2);


// Find smallest odd number -> 3

const smallestOdd = numbers.reduce((acc, curr) => {
    if (curr % 2 !== 0 && curr < acc) acc = curr;

    return acc;
}, Infinity);

console.log(smallestOdd);


// let smallestOdd = Infinity;

// for(const num of numbers) {
//     if(num % 2 !== 0 && num < smallestOdd) smallestOdd = num;
// }

// console.log(smallestOdd);



const nums = [
    [1, 2, 3],
    [5, 10, 20],
    [100, 200]
];

// Find sum of numbers of inner arrays : [6, 35, 300]

const result = nums.map(arr => arr.reduce((acc, curr) => acc + curr, 0));

console.log(result);



const numeros = [3, 2, 5, 0, 1];

// factorial of each number -> [ 6, 2, 120, 1, 1 ]
// 0! = 1
// 5! = 5 * 4 * 3 * 2 * 1 => 120

let factorials = numeros.map(num => { 
    if (num <= 1) return 1;
    else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
});

console.log(factorials);