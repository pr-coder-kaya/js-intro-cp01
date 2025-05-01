const numbers = [ 10, 5, -3, 4 ];
const names = [ 'Jane', 'John', 'Max' ];

const numbersReversed = numbers.reverse();
const namesReversed = names.reverse();

console.log(numbers);
console.log(numbersReversed);
console.log(names);
console.log(namesReversed);

/*
This method modifies the original array
It returns the modified array back
*/


/*
JS introduced toReversed() method which creates a new array when reversing
It does not change the original array
This was released in ES2023 (ES14)
*/

/*
const cities = ['Miami', 'Chicago', 'LA'];

const citiesReversed = cities.toReversed();

console.log(cities);
console.log(citiesReversed);
*/