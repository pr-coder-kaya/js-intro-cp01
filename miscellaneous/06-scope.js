// Global Scope - most accessible variables
// These are the variables declared outside the functions and blocks

let fname = 'John'; // global-scoped

if(fname[0] === 'J') console.log('YAYY'); // Works as fname is global-scoped
else console.log('NAHH');

for(const char of fname) {
    console.log(char);
}

function upper() {
    console.log(fname.toUpperCase());
}

upper();


// Function Scope
// These are variables declared within a function block
function sum(arr) {
    let result = 0; // result is function-scoped

    for(const num of arr) {
        result += num;
    }

    return result;
}

if(result % 2 === 0) console.log('EVEN'); // ReferenceError: result is not defined
else console.log('ODD');


/*
Both global scope and function scope were there before ES6 (var, let, const works same for these 2)
After ES6, block scope(does not work with var but let and const) and lexical scope is added
*/

{
    let n1 = 10;
    const n2 = 11;
    var n3 = 12;

    console.log(n1);
    console.log(n2);
    console.log(n3);
}

// console.log(n1); // ReferenceError: n1 is not defined
// console.log(n2); // ReferenceError: n2 is not defined
console.log(n3); // 12



// Lexical Scope - is 2 function created within each other
// In this case outer function cannot access inner function variables
// While inner function can access outer function variables

function funcA() {
    let num1 = 10;

    function funcB() {
        let num2 = 11;

        console.log(num1);
        console.log(num2);
    }

    funcB();

    console.log(num1); // allowed
    console.log(num2); // not allowed - ReferenceError: num2 is not defined
}

funcA();