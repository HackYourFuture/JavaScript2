'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

let newNumbers = [];

newNumbers = numbers.filter(el => el % 2 !== 0).map(el => el * 2)

console.log('The doubled numbers are', newNumbers);
