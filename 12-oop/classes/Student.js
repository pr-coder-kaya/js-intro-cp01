// ES6 class
/*
class Student {
    constructor(fname, lname, email, dob, instructorFullname) {
        this.id = Math.ceil(Math.random() * 1000000);
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.dob = dob;
        this.instructorFullname = instructorFullname;
    }

    update(fname, lname, email, dob, instructorFullname) {
        if(fname) this.fname = fname;
        if(lname) this.lname = lname;
        if(email) this.email = email;
        if(dob) this.dob = dob;
        if(instructorFullname) this.instructorFullname = instructorFullname;
    }
}

module.exports = Student;
*/

// AFTER ES6
// function constructor to create a prototype
function Student(fname, lname, email, dob, instructorFullname) {
    this.id = Math.ceil(Math.random() * 1000000);
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.dob = dob;
    this.instructorFullname = instructorFullname;
}

Student.prototype.update = function (fname, lname, email, dob, instructorFullname) {
    if(fname) this.fname = fname;
    if(lname) this.lname = lname;
    if(email) this.email = email;
    if(dob) this.dob = dob;
    if(instructorFullname) this.instructorFullname = instructorFullname;
}

module.exports = Student;