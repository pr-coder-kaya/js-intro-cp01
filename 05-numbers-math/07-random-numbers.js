// We can use Math.random() to generate random numbers for any edges

// Generate random numbers between 7 and 10 (both edges are inclusive)
// 7-8-9-10

console.log(Math.floor(Math.random() * 4 + 7)); // 9, 10, 8, 7
console.log((Math.random() * 4 + 7).toFixed(0));


// Formulate the logic
// Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);