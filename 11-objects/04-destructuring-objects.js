// Destructuring arrays and objects
// This concept is known as extracting array elements or object property values into separate variables

// Array
const names = ['John', 'Jane', 'Alex'];

const [ name1, , name3 ] = names;

console.log(name1);
console.log(name3);


// Object
const computer = {
    os: 'macOS',
    memory: '1 TB',
    price: 1000,
    color: 'Silver'
};

const { price, color, os: operatingSystem } = computer;

console.log(price);
console.log(color);
console.log(operatingSystem);