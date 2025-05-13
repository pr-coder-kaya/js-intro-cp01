// Before ES6 single object inheritance - sharing properties between JS objects
const person = {
    isAlive: true,
    eat: function() {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP');
    }
}

// Inheritance with Object.create() method
const singer = Object.create(person);

singer.sing = function () {
    console.log('SING');
}

singer.bandName = 'Imagine Dragons';

singer.eat();
singer.sleep();
singer.sing();
console.log(singer.isAlive);
console.log(singer.bandName);


// Inheritance with __proto__
const teacher = {
    teach: function() {
        console.log('TEACH');
    },
    __proto__: person
}

teacher.eat();
teacher.sleep();
teacher.teach();
console.log(teacher.isAlive);