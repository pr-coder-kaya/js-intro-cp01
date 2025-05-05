// reduce is useful for questions like sum, max, min, ave
// most expensive, eldest, youngest

const numbers = [ 5, 3, 2, 10, 7 ]; 

// sum = 27

const result = numbers.reduce((sum, num) => sum + num, 0);

console.log(result);

// product = 2100

const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 2100




// let sum = 0;
// numbers.forEach(x => sum += x);
// console.log(sum);


// let sum = 0;

// for(const num of numbers) {
//     sum += num;
// }

// console.log(sum);



const cities = [ 'Rome', 'Milan', 'LA', 'Chicago' ];

// shortest city -> LA
// longest city -> Chicago

const shortest = cities.reduce((acc, curr) => acc.length < curr.length ? acc : curr, cities[0]);

console.log(shortest);

console.log(cities.reduce((acc, curr) => acc.length > curr.length ? acc : curr, cities[0]));


// let shortest = cities[0];

// for(const city of cities) {
//     if(city.length < shortest.length) shortest = city;
// }

// console.log(shortest);