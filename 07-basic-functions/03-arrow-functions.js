// ES6 feature
// Arrow functions are the most concise way of creating functions in JS and commonly preferred
// These functions are not hoisted so cannot be used before their creation


// console.log(max([15, 2, 10, 0])); // ReferenceError: Cannot access 'max' before initialization

const max = (arr) => {
    return Math.max(...arr);
}

console.log(max([15, 2, 10, 0])); // 15


// With the arrow function, we can omit the return keyword and curly braces if there is one statement in the function body
// We can also omit the parantheses for the parameters if there is only ONE param

const min = arr => Math.min(...arr);

console.log(min([1, 5, 0, 10])); // 0


const sum = (n1, n2) => n1 + n2;

console.log(sum(5, 10)); // 15