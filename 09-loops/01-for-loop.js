// Traditional loop - for loop - i loop

for(let i = 0; i <= 10; i++) {
    console.log(i);
}


for(let i = 5; i > 0; i--) {
    console.log(i);
}


let str = 'TechGlobal';

let countL = 0;

for(let i = 0; i <= str.length; i++) {
    if(str[i] === 'l') countL++;
}

console.log(countL); // 2


const names = ['John', 'Jane', 'Max', 'Mario', 'Cesar'];

let countNamesHasA = 0;

for(let i = 0; i < names.length; i++) {
    if(names[i].includes('a')) countNamesHasA++;
}

console.log(countNamesHasA);