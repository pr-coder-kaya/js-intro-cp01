// In JS, Map is introduced with ES6 (in 2015)
// Js Object has lots of useful methods
// Some of these are: keys(), values(), entries()
// These are all static methods
// These methods takes an object-variable as an argument
// These are return type-methods

const program = {
    name: 'SDET',
    duration: '3 months',
    tuition: 10
};

const allKeys = Object.keys(program); // [ 'name', 'duration', 'tuition' ]
const allValues = Object.values(program); // [ 'SDET', '3 months', 10 ]
const allEntries = Object.entries(program); // [ ['name', 'SDET'], ['duration', '3 months'], ['tuition', 10] ]

console.log(allKeys);
console.log(allValues);
console.log(allEntries);

for(const x of Object.keys(program)) {
    console.log(x);
}

for(const x of Object.values(program)) {
    console.log(x);
}

for(const x of Object.entries(program)) {
    console.log(x);
}


const computer = {
    os: 'macOS',
    memory: '1 TB',
    price: 1000,
    color: 'Silver'
};

for(const key of Object.keys(computer)) {
    // console.log(key);
    console.log(key, computer[key]);
}

for(const key in computer) {
    console.log(key, computer[key]);
}

for(const [k, v] of Object.entries(computer)) {
    console.log(`Key is: ${k}, value is: ${v}`);
}