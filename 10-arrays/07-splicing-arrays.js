// splice() method in JS can be used instead of push(), pop(), shift() and unshift()
// we can use it to add, remove, or modify array elements

const animals = [ 'Bird', 'Lion', 'Fish' ];

animals.splice(0, 0, 'Tiger'); // [ ]
animals.splice(2, 1, 'Rabbit', 'Elephant'); // [ 'Lion' ]
animals.splice(0, 3); // [ 'Tiger', 'Bird', 'Rabbit' ]

console.log(animals);

/*
it modifies the original array
*/