'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers.filter(x => (x % 2 !== 0)).map(x => x * 2);
console.log('The doubled numbers are', newNumbers);
