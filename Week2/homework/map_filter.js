'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

let resultNumber = numbers.filter(number => number % 2 !== 0).map(number => number * 2);
console.log(resultNumber);
