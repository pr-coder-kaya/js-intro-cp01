const arr = [ [1, 2, 3], [0, 10, 100], [63, 27, -50] ];

// Find max and min the arr

const newArr = arr.flat();

console.log(Math.max(...newArr));
console.log(Math.min(...newArr));


const numbers = [1, [2, 3, [4, 5, [6, [7]]]]];
console.log(numbers.flat(4));


/*
let max = arr[0][0]; // 1
let min = arr[0][0]; // 1

for(const innerArr of arr) {
    for(const num of innerArr) {
        if(num < min) min = num;
        if(num > max) max = num;
    }
}

console.log(min, max);
*/