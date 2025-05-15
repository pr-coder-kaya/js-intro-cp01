function goto(url) {
    setTimeout(() => {
        console.log(`Page loaded for ${url}...`);
    }, 1000);
}

function clickOnElement(locator) {
    setTimeout(() => {
        console.log(`Element with ${locator} clicked...`);
    }, 2000);
}

function assertText(text) {
    setTimeout(() => {
        console.log(`${text} text is visible...`);
    }, 500)
}

function test1() {
    goto('www.techglobal-training.com'); // 1 second
    clickOnElement('#submit');
    assertText('Your form is submitted!');
}

test1();


// How to resolve this Before ES6 and after ES6
// There are 3 different ways to handle asynchronous code in JS
// 1. Callbacks
// 2. then() and catch()
// 3. async-await 