/*
Write a function named as firstDuplicate() which takes an array argument and returns the first duplicated number in the array when invoked.
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates in the array. 
For two elements to be considered as duplicated, value and data types of the elements must be same.

Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])              -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])               -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ])                 -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])     -> 'abc'
firstDuplicate([ 1, 2, 3])                          -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])      -> -1
*/


function firstDuplicate(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        if(arr.slice(i + 1).includes(arr[i])) return arr[i];
    }

    return -1;
}

console.log(firstDuplicate([ 3, 7, 10, 0, 3, 10 ]));
console.log(firstDuplicate([ 5, '5', 3, 7, 4 ]));

// BIG O Notation - Time & space complexity
// Time complexity: O(n)
// Time complexity: O(n * m)

// n = 3, m = 2     -> 6
// n = 4, m = 2     -> 8
// n = 5, m = 3     -> 15

/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ])               -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ])                                -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ])                 -> [ ]
*/

function getDuplicates(arr) {
    return arr.reduce((acc, curr, index) => {
            if(acc.includes(curr)) return acc;
            if(arr.slice(index + 1).includes(curr)) acc.push(curr);

            return acc;
    }, []);

    // const result = [];

    // for(let i = 0; i < arr.length - 1; i++) {
    //     if(result.includes(arr[i])) continue;

    //     if(arr.slice(i + 1).includes(arr[i])) result.push(arr[i]);
    // }

    // return result;
}

console.log(getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]))
console.log(getDuplicates([ 1, 2, 5, 0, 7 ]))
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo' ]));


/*
Requirement:
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])              -> [10, 20, 35, 60, 70]
removeDuplicates([1, 2, 5, 2, 3])                               -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])                           -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])     -> ["abc", "xyz", "123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])                     -> ["1", "2", "3"]
*/

function removeDuplicates(arr) {
    return arr.reduce((acc, curr) => { // acc = [10, 20, 35, 60, 70], curr = 60
        if(acc.includes(curr)) return acc;
        acc.push(curr);

        return acc;
    }, []);
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));
console.log(removeDuplicates([1, 2, 5, 2, 3]));


const swapFirstLastWord = (str) => {
    str = str.trim();
    if(!str.includes(' ')) return '';

    const words = str.split(' '); // [ 'JavaScript', 'is', 'super', 'fun']
    return [words.at(-1), ...words.slice(1, -1), words[0]].join(' '); // ['fun', ['is', 'super'], 'JavaScript']
}


console.log(swapFirstLastWord('JavaScript is super fun')); // 'fun is JavaScript'