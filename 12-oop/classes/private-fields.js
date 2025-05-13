class Employee {
    // this is a private field-property can only be accessed within the class
    #password = 'Secret123!';

    // We can access private fields with getters and setters
    getPassword() {
        return this.#password;
    }

    setPassword(newSecret) {
        this.#password = newSecret;
    }
}

const emp1 = new Employee();
const emp2 = new Employee();

console.log(emp1.getPassword());
console.log(emp2.getPassword());

emp1.setPassword('Emp1123$123#');

console.log(emp1.getPassword());
console.log(emp2.getPassword());