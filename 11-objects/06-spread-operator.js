// Spread operator can be used for arrays and objects

const arr = [ 5, 10, 0 ];

console.log(Math.max(...arr));

console.log(arr);
console.log(...arr);

console.log(sum([5, 10, 0], 3)); // 5,10,03undefinedundefined
console.log(sum(5, 10, 0, 3)); // 18


function sum (n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
}

// Objects

const table = {
    material: 'Wood',
    color: 'Brown'
};

const diningTable = {
    capacity: 4,
    ...table,
    adjustable: true
};

console.log(table);
console.log(diningTable);


const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

const arr3 = [0, 15, ...arr2, 10,  ...arr1, 7];
console.log(arr3);