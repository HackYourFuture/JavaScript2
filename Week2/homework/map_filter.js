'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // I added some more numbers for testing.

// Add your code here

const doubledOddNumbers = numbers.filter(number => number % 2 !== 0).map(number => number * 2);

console.log(doubledOddNumbers);

