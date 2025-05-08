const Car = require('./12-oop/prototypes/Car'); // this is importing Car template
const Member = require('./12-oop/prototypes/Member');

// const bmw = new Car('BMW', 'X6', 2020, 35000);

// console.log(bmw); // Car { make: 'BMW', model: 'X6', year: 2020, price: 35000 }

// bmw.discount(3000);
// bmw.addTax();

// console.log(bmw); // Car { make: 'BMW', model: 'X6', year: 2020, price: 35200 }


const member = new Member('John Doe', 'johnxxx', 'john1234', true);

console.log(member);

member.resetPassword('Secret123!');
member.freeze();

console.log(member);