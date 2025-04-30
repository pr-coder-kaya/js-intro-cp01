// for...in loop is mostly ued with objects (secondly arrays)

const person = {
    fname: 'John',
    lname: 'Doe',
    age: 45,
    address: null
};

// Validate the person object does not have any null values
let nullish = false;
for(const key in person) { 
    if(person[key] === null) {
        nullish = true;
        break;
    }
}

if(nullish) console.log('FAIL');
else console.log('PASS');



const cities = ['Rome', 'Berlin', 'Chicago', 'Miami'];

for(const key in cities) {
    console.log(key, cities[key]);
}