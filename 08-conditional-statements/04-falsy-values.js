if('') {
    console.log(1);
}
else {
    console.log(2);
}

// Output: 2

if(NaN) {
    console.log(1);
}
else {
    console.log(2);
}

// Output: 2

if(0) {
    console.log(1);
}
else {
    console.log(2);
}

// Output: 2

// NaN, null, undefined, 0, ''


let data = '';

if(data) console.log('SUCCESS');
else console.log('FAILURE');
