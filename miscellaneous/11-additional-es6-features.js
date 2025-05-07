// String templates (backticks), arrow functions, for...of loop, some string and array methods
// spread operator, enhanced object literals, destructuring arrays and objects
// We'll learn more: classes, promises, async-await, modules


// Default parameters
function switchFlag(on = true) {
    if(on) return true;

    return false;
}


console.log(switchFlag()); // true


function sum(n1, n2 = 0) {
    return n1 + n2;
}

console.log(sum(3)); // 3
console.log(sum(3, 5)); // 8


function setBrowser(browser = 'firefox') {
    switch(browser) {
        case 'chrome': 
            // set chrome
            break;
        case 'safari':
            // set safari
            break;
        case 'firefox':
            // set firefox
            break;
    }
}

setBrowser();


// Default parameters must be the last parameters 
function funcA(p1, p2, p3 = 'Hello', p4 = 'Abc') {
    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
}

funcA(1, 2, 3, 4);



// REST PARAMETERS
function sum(...values) { // any number of arguments collected in an array
    return values.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum()); // 0
console.log(sum(5)); // 5
console.log(sum(5, 2)); // 7
console.log(sum(5, 2, 3)); // 10
console.log(sum(5, 2, 3, 10, 20)); // 40





console.log(Math.max(1, 2));
console.log(Math.max(1, 2, 3));
console.log(Math.max(1, 10, 2, 3));
console.log(Math.max(1, 10, 25, 2, 3));