let str = 'back to back';

console.log(str.includes(' ')); // true
console.log(str.includes('a')); // true
console.log(str.includes('A')); // false

console.log(str.includes('back')); // true
console.log(str.includes(str)); // true
console.log(str.includes('')); // true


let str2 = 'Hello';

console.log(str2.startsWith('H')); // true
console.log(str2.startsWith('Hell')); // true 

console.log(str.endsWith('Hello')); // true
console.log(str.endsWith('o')); // true

console.log(str2.startsWith('Apple')); // false
console.log(str2.endsWith('Orange')); // false

console.log(str2.startsWith(str2)); // true
console.log(str2.endsWith(str2)); // true

/*
includes(), startsWith(), endsWith()

They are all used to check string if it contains a substring, starts with a substring or ends with a substring
They all return boolean (true or false)
They are all instance methods
They are all return type methods
They do not change the original value of the string
*/

let str3 = 'TechGlobal';

console.log(str3.includes('Tech', 1)); // false
console.log(str3.startsWith('Tech', 1)); // false
console.log(str3.endsWith('Global', 9)); // false


let sentence = 'can I can a can';

console.log(sentence.indexOf('a')); // 1
console.log(sentence.indexOf('can')); // 0
console.log(sentence.lastIndexOf('can')); // 12

console.log(sentence.indexOf('apple')); // -1
console.log(sentence.indexOf('X')); // -1
console.log(sentence.lastIndexOf('y')); // -1

/*
Both indexOf() and lastIndexOf() methods are used to find the index of a substring
They are both instance methods
They do not change the original string value
They both return the found index or -1 if not
*/

// search(), match() and matchAll() are also used for searching strings and they support
// regular expressions as well (RegEx)