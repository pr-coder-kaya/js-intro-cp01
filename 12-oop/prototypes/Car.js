// constructor function
// Car prototype/template has properties such as make, model, year, price
// Car prototype/template has functions/behaviors such as 

// Property: What object has
// Function: What object does

// Before ES6 - prototypes
/*
function Car(make, model, year, price) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.price = price;
}

Car.prototype.discount = function(amount) {
    this.price -= amount;
}

Car.prototype.addTax = function() {
    this.price *= 1.1;
}
*/

// After ES6 - classes
class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }

    discount(amount) {
        this.price -= amount;
    }

    addTax() {
        this.price *= 1.1;
    }
}

module.exports = Car;