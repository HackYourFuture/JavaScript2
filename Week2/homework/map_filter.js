'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
let newNumbers = numbers.filter((number) => number % 2 !== 0);
newNumbers = newNumbers.map((number)  => number*2);

console.log('The doubled numbers are', newNumbers);