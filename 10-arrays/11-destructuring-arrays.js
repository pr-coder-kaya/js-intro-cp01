const favorites = [ 7, 'Salad', 'Soccer', 'JavaScript' ];

// const favNumber = favorites[0];
// const favFood = favorites[1];
// const favSport = favorites[2];
// const favPL = favorites[3];

const [ favNumber, favFood, favSport, favPL ] = favorites;

console.log(favNumber);
console.log(favPL);


const arr = [ 'Mouse', 'Laptop', 'Camera', 'Phone' ];

const [ var1, , , var2 ] = arr;

console.log(var1, var2);