let str = 'abc';

console.log(str.padStart(10, '$')); // $$$$$$$abc
console.log(str.padEnd(5, '1')); // 'abc11'

console.log('Hello World'.toUpperCase().split(' ')[1].slice(0, 2)); // 'WO'