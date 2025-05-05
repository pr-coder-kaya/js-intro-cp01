const names = [ 'John', 'Jane', 'Alex', 'Jennifer' ];


// Check if all elements are string         -> true
// Check if all elements have 4 characters  -> false
// Check if some elements has odd length    -> false
// Check if some element starts with 'A'    -> true

console.log(names.every(x => typeof x === 'string')); // true
console.log(names.every(x => x.length === 4)); // false

console.log(names.some(x => x.length % 2 !== 0)); // false
console.log(names.some(x => x[0] === 'A')); // true

