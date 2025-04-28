// Traditional way
// Function declaration
// Functions that are created using function declaration are hoisted
// Meaning: they can be invoked before or after their declaration


console.log(max([1, 5, -2, 10, 8])); // 10

function max(arr) {
    return Math.max(...arr); // spread operator
}

console.log(max([1, 5, -2, 10, 20])); // 20