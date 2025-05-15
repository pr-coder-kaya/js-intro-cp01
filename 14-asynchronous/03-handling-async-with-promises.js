function goto(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const serverUp = false;
            if(serverUp) resolve(`Page loaded for ${url}...`);
            else reject('500 Server Error!');
        }, 1000);
    });
}

function clickOnElement(locator) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const elementFound = true;
            if(elementFound) resolve(`Element with ${locator} clicked...`);
            else reject('Element Not Found!');
        }, 2000);
    });
}

function assertText(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const textVisible = true;
            if(textVisible) resolve(`${text} text is visible...`);
            else reject('Text Not Found or Not Matching!');
        }, 500);
    });
}

// function test1() {
//     goto('www.techglobal-training.com')
//         .then(() => clickOnElement('#submit'))
//         .then(() => assertText('Submission completed!'))
//         .catch((err) => console.log(err));
// }

// test1();

// Syntatical sugar
async function test2() {
    try {
        await goto('www.techglobal-training.com');
        await clickOnElement('#submit');
        await assertText('Submission completed!');
    }
    catch(err) {
        console.log(err);
    }

    console.log('Hello World');
}


test2();