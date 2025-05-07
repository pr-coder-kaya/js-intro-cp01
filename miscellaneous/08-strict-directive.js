"use strict"

x = 10; // ReferenceError: x is not defined

console.log(x);  


const obj = {
    fname: 'John',
    lname: 'Alex'
};

Object.freeze(obj);

delete obj.fname;

console.log(obj);