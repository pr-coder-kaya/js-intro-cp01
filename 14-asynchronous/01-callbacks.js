function goto(url, callback) {
    setTimeout(() => {
        console.log(`Page loaded for ${url}...`);
        callback();
    }, 1000);
}

function clickOnElement(locator, callback) {
    setTimeout(() => {
        console.log(`Element with ${locator} clicked...`);
        callback();
    }, 2000);  
}

function assertText(text, callback) {
    setTimeout(() => {
        console.log(`${text} text is visible...`);
        callback();
    }, 500)
}

function test1() {
    goto('www.techglobal-training.com', () => {
        clickOnElement('#submit', () => {
            assertText('Your form is submitted!', () => {});
        });
    });
}

test1();

// This causes callback hell or pyramid of doom which is not easy to maintain

function getToken(callback, error) {
    const serverUp = false; // assuming server is up

    setTimeout(() => {
        if(serverUp) callback();
        else error();
    }, 2000);
}

function getDataById(id) {
    if(id === 1) return 'John Doe';
    else if(id === 2) return "Jane Doe";
    return "Alex Smith";
}

function throwError() {
    throw new Error('500 Server Error!');
}

function testDataById() {
    getToken(() => {
        const data = getDataById(2);
        if(data === 'Jane Doe') console.log('TEST PASSED');
        else console.log('TEST FAILED');
    },
    () => {
        throwError();
    })
}

testDataById();