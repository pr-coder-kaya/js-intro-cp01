
for(let i = 1; i <= 5; i++) {
    console.log(i);
    for(let j = 1; j <= 3; j++) {
        console.log('\t', j);
    }
}

const arr = ['Phone', 'Mouse', 'Key'];

for(const el of arr) {
    console.log(el);
    for(const char of el) {
        console.log('\t', char);
    }
}

let str = 'Apple';

for(const char of str) {
    console.log(char);
}

