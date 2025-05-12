const Student = require('./Student');

const student1 = new Student('John', 'Doe', 'john@gmail.com', '10/10/2000', 'Leyla Haddad');
const student2 = new Student('Alex', 'Smith', 'alex@gmail.com', '10/11/1990', 'Robert Hass');


console.log(student1);
console.log(student2);

// update instructor for the student1
student1.update(null, null, null, null, 'Sofia Alvarado');
console.log(student1);

// update email and instructor for the student2
student2.update(null, null, 'smith@outlook.com', null, 'Tony Hunter');
console.log(student2);