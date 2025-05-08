const Car = require('./prototypes/Car'); // This is importing statement

const car1 = new Car('Mercedes', 'X6', 2025, 70000);
const car2 = new Car('Tesla', 'Y', 2024, 45000);

car1.discount(2000);
car1.discount(5000);
car1.addTax(); // 10 percent


console.log(car1);
console.log(car2);

console.log(car1.price); 
console.log(car2.make);