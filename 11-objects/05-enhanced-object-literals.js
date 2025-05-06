let fullname = 'John Doe';
let age = 45;
let address = {
    street: 'Abc Street',
    city: 'Chicago',
    state: 'IL',
    ZIP: 12345
};

// BEFORE ES6
const obj1 = {
    fullname: fullname,
    age: age,
    address: address
};

// AFTER ES6 - enhanced way
const obj2 = {
    fullname,
    age,
    address
};

console.log(obj1);
console.log(obj2);