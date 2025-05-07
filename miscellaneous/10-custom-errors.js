function max(arr) {
    if(!Array.isArray(arr)) throw new TypeError('It is not an array!');
    else if(arr.length === 0) throw new Error('Array cannot be empty!');

    return Math.max(...arr);
}

console.log(max([1, 10, 4]));