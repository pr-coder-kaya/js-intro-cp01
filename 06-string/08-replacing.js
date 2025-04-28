let str = 'can I can a can';

console.log(str.replace('can', '***')); // *** I can a can
console.log(str.replaceAll('can', '***')); // *** I *** a ***

let word = 'JavaScript';

console.log(word.replace('apple', 'Type'));
console.log(word.replaceAll('apple', 'Type'));

console.log(str); // can I can a can

/*
These are methods used to replace some occurrences in the string
They will replace one or all occurrences
They are both instance methods
They are both return type methods and they return a new string
They do not change the original value
*/