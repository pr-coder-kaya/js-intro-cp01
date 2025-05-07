// Closure is having nested functions and making some private fields


function funcA() {
    let privateInformation = 'Secret'; // This is a private variable of funcA which cannot be accessed outside the function

    function getPrivateInformation(pin) {
        if(pin === 'TechGlobal$$') return privateInformation;
        else throw new Error('Sorry, your pin is not correct! Do not try again!!!');
    }

    return getPrivateInformation;
}


const returnedFunction = funcA();

console.log(returnedFunction('TechGlobal$$'));