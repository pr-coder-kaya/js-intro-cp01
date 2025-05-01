const arr = ['US', 'Canada', 'Germany', 'France'];

const str1 = arr.toString();
const str2 = arr.join();
const str3 = arr.join('-');
const str4 = arr.join(' | ');


console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


/*
Both methods converts our array into a string
They do not modify the original array
They are bot return type methods and instance methods
*/