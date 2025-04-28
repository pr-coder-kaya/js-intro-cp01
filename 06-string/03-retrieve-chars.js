let str = 'SDET';

// first and last characters - property access
console.log(str[0], str[str.length - 1]);

// at() method can be used to retrieve characters using index
// at() method works backward when negative index is provided
console.log(str[0]);
console.log(str.at(-1));
console.log(str.at(-2));


// charAt() method can also be used to retrieve characters at found index and does not support negative indexes
console.log(str.charAt(0));
console.log(str.charAt(str.length-1));

let obj = 'Mouse';

console.log(obj[10]); // undefined
console.log(obj.charAt(10)); // empty string
console.log(obj.at(10)); // undefined

console.log(obj); // Mouse


// We don't use charAt() method
// We use property access for getting characters if starting from the head
// We use at() method for getting characters if starting from the tail


// Are these methods static? No, because we invoke them with instances - they are instance methods
// Are they changing the original value of the string? No, they do not modify the original value
// Are they return type? YES, a single character if index is valid

let country = 'Argentina';
console.log(country.charCodeAt(0)); // 65
console.log(country.charCodeAt(1)); // 114

