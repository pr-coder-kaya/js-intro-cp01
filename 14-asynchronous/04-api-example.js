// function test1() {
//     fetch('https://api.techglobal-training.com/students')
//         .then((res) => {
//             console.log(res.ok);
//             console.log(res.status);
//             console.log(res.statusText);


//             return res.json();
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .catch((err) => console.log(err));
// }

// test1();

// async function test2() {
//     try {
//         const res = await fetch('https://api.techglobal-training.com/students');
//         console.log(res.ok);
//         console.log(res.status);
//         console.log(res.statusText);

//         const data = await res.json();
//         console.log(data);
//     }
//     catch(err) {
//         console.log(err);
//     }
// }

// test2();

async function test3() {
    try {
        const res = await fetch('https://api.techglobal-training.com/students/7760');
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);

        const data = await res.json();
        console.log(data);
        console.log(data.STUDENT_ID);
        console.log(data.INSTRUCTOR_NAME);
    }
    catch(err) {
        console.log(err);
    }
}

test3();