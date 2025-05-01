// one function can take another function as parameter

function funcA(callback) {
    console.log('This is function A running!');
    callback();
}


function funcB() {
    console.log('This is function B running!');
}

funcA(funcB);

// Output
// This is function A running!
// This is function B running!

// funcA which takes another function as a param is known as Higher Order Function
// funcB which is passed as a param to another function is know as Callback Function