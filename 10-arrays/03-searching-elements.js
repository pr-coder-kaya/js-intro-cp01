const objects = [ 'Mouse', 'Phone', 'Mug', 'Pen', 'Mouse' ];

objects.includes('Mouse'); // true
objects.includes('Phone'); // true
objects.includes('pen'); // false

objects.indexOf('Pen'); // 3
objects.lastIndexOf('Pen'); // 3

objects.indexOf('Mouse'); // 0
objects.lastIndexOf('Mouse'); // 4

objects.indexOf('wallet'); // -1
objects.lastIndexOf('wallet'); // -1

console.log(objects); // [ 'Mouse', 'Phone', 'Mug', 'Pen', 'Mouse' ]

/*
These methods are instance
These methods do not modify the original array
These are return type methods
*/
