let sentence = 'I like JavaScript strings';

// 'like'

console.log(sentence.substring(2, 6));
console.log(sentence.slice(2, 6));


// 'JavaScript strings'
console.log(sentence.substring(7));
console.log(sentence.slice(7));


// Difference between substing and slice is backwards checking
let str = 'JavaScript';

console.log(str.slice(-6)); // 'Script'
console.log(str.substring(0)); // 'JavaScript'
console.log(str.substring(0)); // 'JavaScript'

let word = 'Engineer';

// get first 2 and last 2 chars
console.log(word.slice(0, 2) + word.slice(-2)); // 'Ener'
console.log(word.slice(0, 3) + word.slice(-3)); // 'Engeer'


/*
Both slice() and substring() are used to retrieve substrings from a string
They do no change the original value
They can take one or two index positions to slice out a substring
They are both return type methods
They are instance methods

NOTE: slice() is more powerful as it supports negative indexes going backward to substract substrings
This is the most preferred one
*/


let sent = 'We are learning JS today';

const words = sent.split(' '); // 

console.log(words); // [ 'We', 'are', 'learning', 'JS', 'today' ]
console.log(words.length); // 5

let date = '11/25/2000';
const dateArr = date.split('/');
console.log(dateArr); // [ '11', '25', '2000' ]

console.log(`The month is ${dateArr[0]}`);
console.log(`The day is ${dateArr[1]}`);
console.log(`The year is ${dateArr[2]}`);

/*
split() method is used to extract string into smaller elements stored in an array
it returns an array
it does not change the original value
it is an instance method
*/