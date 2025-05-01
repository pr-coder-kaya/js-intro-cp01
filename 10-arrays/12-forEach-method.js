// forEach() is an Array Higher Order Method

const numbers = [ 10, 20, 15, 50 ];

numbers.forEach(num => console.log(num));

numbers.forEach(function (el) {
    console.log(el);
});


// we usually use forEach() to iterate array elements but not too much manipulation
