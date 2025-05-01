// string arrays are sorted alphabetically
const cities = ['Miami', 'manchester', 'LA', 'Chicago'];

const citiesSorted = cities.sort();

console.log(cities); // [ 'Chicago', 'LA', 'Miami', 'manchester' ]
console.log(citiesSorted); // [ 'Chicago', 'LA', 'Miami', 'manchester' ]


// number arrays are also sorted alphabetically unless you use a comparison callback function
const numbers = [ 1, 40, 11, 5, 110 ];
numbers.sort((x, y) => x - y);

console.log(numbers); // [ 1, 5, 11, 40, 110 ]


/*
It modifies the original array
*/