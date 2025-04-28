// this keyword
// this keyword is a reference to the current object - context

console.log(this); // {}

function funcA() {
    console.log('======This refers to\n', this);
}

const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function() {
        return this.fname + ' ' + this.lname;
    }
};

console.log(person.fullname()); // 'John Doe'



function func1() {
    console.log('Function Declaration\n', this);
}

const func2 = () => {
    console.log('Arrow Function\n', this);
}

func1();
func2();

// Arrow functions have their own scope for the this keyword
// If you need to work with this, prefer function declaration