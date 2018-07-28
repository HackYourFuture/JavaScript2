'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

const doubledOddNumbers = numbers.filter(x => x % 2 !== 0).map(x => x * 2);

console.log(doubledOddNumbers);