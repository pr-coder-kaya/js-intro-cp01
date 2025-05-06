const obj1 = {
    fullname: 'John Doe',
    address: {
        city: 'Chicago',
        state: 'IL'
    }
};

// Shallow copy
const obj2 = {
    ...obj1
};

obj1.fullname = 'Alex Smith';
obj1.address.city = 'Evanston';

console.log(obj1);
console.log(obj2);


const obj3 = {
    fullname: 'John Doe',
    address: {
        city: 'Chicago',
        state: 'IL'
    }
};

// Deep copy including all the nested objects and arrays
const obj4 = JSON.parse(JSON.stringify(obj3));

obj3.fullname = 'Alex Smith';
obj3.address.city = 'Evanston';

console.log(obj3);
console.log(obj4);