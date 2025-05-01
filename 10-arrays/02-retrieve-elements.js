const objects = [ 'Mouse', 'Phone', 'Mug', 'Pen', 'Mouse' ];

// get element at specified index
objects[0]; // 'Mouse'
objects[2]; // Mug

objects[objects.length - 1];

objects.at(1); // Phone
objects.at(-1); // 'Mouse'
console.log(objects.at(-2)); // 'Pen'

console.log(objects[7]); // undefined
console.log(objects.at(7)); // undefined

console.log(objects[-1]); // undefined
console.log(objects.at(-6)); // undefined


const numbers = [1, 2, 3]; // [1, 2, 3, , , , , , , , , 100]

numbers[10] = 100;

console.log(numbers); // [ 1, 2, 3, <7 empty items>, 100 ]
console.log(numbers.length); // 11

numbers[5] = 99;
console.log(numbers); // [ 1, 2, 3, <2 empty items>, 99, <4 empty items>, 100 ]