class Company {
    type = 'LLC';
    static numberOfEmployees = 0;

    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    // Instance methods
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    hire(number) {
        numberOfEmployees += number;
    }

    // static method
    static getNumberOfEmployees() {
        return this.numberOfEmployees;
    }
}

// Access static properties/fields or methods
console.log(Company.numberOfEmployees); 
console.log(Company.getNumberOfEmployees());


const com1 = new Company('TechGlobal', 'Des Plaines');
console.log(com1.getAddress())
console.log(com1.getName())


// static properties and methods belong to template/prototype/class can be invoked with template/prototype/class name without creation of instance
// instance methods and properties can be invoked by creating instance first

console.log(Math.max(1, 2, 3))

const m1 = new Math();
console.log(m1.max(1, 2, 3));