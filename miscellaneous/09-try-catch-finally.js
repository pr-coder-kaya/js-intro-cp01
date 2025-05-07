try{
    console.log(city); // ReferenceError: city is not defined
}
catch(err) {
    console.log(err);
}


try {
    const pi = 3.14;

    pi = 10; // TypeError: Assignment to constant variable.
}
catch(err) {
    console.log(`${err.name}: ${err.message}`);
}
finally{
    // Any code within this block always executes regardless of having an error or not
    console.log('Hello');
}


console.log('The rest of the program');