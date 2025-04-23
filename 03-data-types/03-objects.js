// JS objects are used to store data in key value pairs/properties
// Storing John Doe's information, he is 25 years old, lives in Chicago and likes playing soccer and reading books.

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 25,
    city: 'Chicago',
    hobbies: ['playing soccer', 'reading books']
};

// Retrieving object property values using dot notation
console.log(person.hobbies); // [ 'playing soccer', 'reading books' ]
console.log(person.hobbies[0]); // 'playing soccer'

console.log(person.age); // 25

console.log(person.favNumber); // undefined
console.log(person['favNumber']); // undefined


// Retrieving object property values using bracket notation
console.log(person['city']); // Chicago
console.log(person.city); // Chicago

// How to add new properties & remove exsting properties
const program = {
    name: 'SDET',
    startDate: 'April 21',
    students: ['Jane', 'John', 'Alex']
};

console.log(program);

// add more properties
program.duration = '12 weeks';
program['hours'] = 144;

console.log(program);

// delete some properties
delete program.startDate;
delete program.students;
delete program['duration'];
delete program['hours'];
delete program.abc; // No errors

console.log(program);

// We can create an object using Object constructor
const obj1 = new Object(); // empty object
const obj2 = {};

console.log(obj1, obj2);

console.log(typeof obj1);
console.log(typeof obj2);
