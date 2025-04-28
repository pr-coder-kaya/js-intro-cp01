// Function expression is creating an anonymous function and storing it in a const variable
// These functions are not hoisted cannot be invoked before their creation

console.log(max([1, 2, 3, 10])); // ReferenceError: Cannot access 'max' before initialization

const max = function (arr) {
    return Math.max(...arr);
}

console.log(max([1, 2, 3, 10])); // 10