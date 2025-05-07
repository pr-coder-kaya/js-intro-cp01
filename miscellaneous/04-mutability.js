// primitives are immutable

let fname = 'John';
let aName = fname;

fname = 'Alex';

console.log(fname); // 'Alex'
console.log(aName); // 'John'


let num1 = 10;
let num2 = num1;
let num3 = num2;

console.log(num1, num2, num3); // 10 10 10

num1 = 20;
num2 = 30;

console.log(num1, num2, num3); // 20 30 10


// Arrays or objects are mutable
const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1, arr2); // [ 1, 2, 3 ] [ 1, 2, 3 ]

arr1.push(4);
arr2.push(5);

console.log(arr1, arr2); // [ 1, 2, 3, 4, 5 ] [ 1, 2, 3, 4, 5 ]


const months1 = ['Jan', 'Feb', 'Mar'];

const months2 = months1;
const months3 = months1;
const months4 = JSON.parse(JSON.stringify(months1));

console.log(months1, months2, months3, months4);

months2.pop();

console.log(months1, months2, months3, months4);





// Objects are also mutable
const obj1 = {
    name: 'Mug',
    color: 'White'
};

const obj2 = obj1;

console.log(obj1, obj2); // { name: 'Mug', color: 'White' } { name: 'Mug', color: 'White' }

obj2.color = 'Black';

console.log(obj1, obj2); // { name: 'Mug', color: 'Black' } { name: 'Mug', color: 'Black' }


// You can stop program to change your objects
const numbers1 = [1, 2, 3];

Object.freeze(numbers1); // This makes object immutable

//numbers1.push(4);
numbers1[0] = 10;

console.log(numbers1);

const person = {
    name: 'John Doe',
    age: 45
};

const person2 = person;
console.log(person, person2);

Object.freeze(person2);

person.favFood = 'Cookie';

console.log(person, person2);


const cities1 = [ 'Rome', 'Berlin' ];
const cities2 = [...cities1];

console.log(cities1, cities2);

cities2.push('Chicago');
console.log(cities1, cities2);


const a1 = [ [1, 2], [3, 4] ];
const a2 = JSON.parse(JSON.stringify(a1));

console.log(a1, a2);

a2[1][0] = 10;

console.log(a1, a2);