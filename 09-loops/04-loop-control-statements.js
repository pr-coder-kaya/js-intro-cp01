for(let i = 0; i <= 10; i++) {
    if(i % 3 === 0) continue; // skips the current iteration whenever hit
    console.log(i);
}


const names = [ 'Alex', 'Max', 'Yunus', 'Dima', 'Lesia' ]; 

// Find the first name which has 5 characters = Yunus
let found;

for(const name of names) {
    if(name.length === 5) {
        found = name;
        break;
    }
}

console.log(found); // 'Yunus'