let str = '   abc 123   ';

console.log(str.trim()); // 'abc 123'
console.log(str.trimStart()); // 'abc 123   '
console.log(str.trimEnd()); // '   abc 123'

/*
These are instance methods
They are used to move spaces at the beginning or at the end or both ends in a string
They do not change the original value
They are all return type
*/