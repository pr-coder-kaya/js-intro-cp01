const summer = [ 'June', 'July', 'August' ];
const spring = [ 'March', 'April', 'May' ];
const fall = [ 'September', 'October', 'November' ];
const winter = [ 'December', 'January', 'February' ];

const months = spring.concat(summer, fall, winter);

console.log(months);

// JS is introduced with spread operator with ES6
// Spread operator can be used to spread array elements into their individual values to be stored or used somewhere else

const numbers1 = [5, 10, 3, 15];
const numbers2 = [15, 100, 0, -5];

/*
From the given arrays find min and max 
min: -5
max: 100
*/

const allNumbers = [...numbers1, ...numbers2];

console.log(Math.max(...allNumbers));
console.log(Math.min(...allNumbers));

/*
const allNumbers = numbers1.concat(numbers2);

let max = allNumbers[0];
let min = allNumbers[0];

for(const el of allNumbers) {
    if(el < min) min = el;
    if(el > max) max = el;
}

console.log(min, max);
*/