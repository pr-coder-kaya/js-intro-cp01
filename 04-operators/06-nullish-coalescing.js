// it is similar to OR logical operator but has some differences

let v1 = undefined || 5;
let v2 = undefined ?? 5;

console.log(v1);
console.log(v2);

let var1 = null || 'Hello';
let var2 = null ?? 'Hello';

console.log(var1);
console.log(var2);

let variable1 = false || 7;
let variable2 = false ?? 7;

console.log(variable1);
console.log(variable2);


const baseUrl = process.baseUrl || 'www.tst.techglobal.com';  // handles all the falsy values

let middleName = data.middle ?? 'default value'; // handles only null and undefined