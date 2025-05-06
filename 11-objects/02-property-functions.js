const math = {
    pi: 3.14,
    add: function (a, b) {
        return a + b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    subtract: function (a, b) {
        return a - b;
    }
};

console.log(math.pi); // 3. 14
console.log(math.add(3, 5)); // 8


// this keyword refers to the current object
const member = {
    fname: 'Max',
    lname: 'X',
    age: 25,
    isPrime: false,
    info: function() {
        return this.fname + ' ' + this.lname;
    }
};

console.log(member.info());


const student = {
    fname: 'Alex',
    lname: 'Smith',
    age: 18,
    fullname: function() {
        return `${this.fname} ${this.lname}`;
    },
    info: function () {
        console.log(`${this.fullname()} is ${this.age} years old!`);
    },
    secret: function(password) {
        if(password === 'SuperSecretPassword') console.log(`${this.fname} likes Nutella!`);
        else console.log('No secret!');
    }
}

student.info(); // Alex Smith is 18 years old!
student.secret('SuperSecretPassword');