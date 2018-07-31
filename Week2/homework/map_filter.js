'use strict';

const numbers = [1, 2, 3, 4];
const singuralNumbers = numbers.filter(number => number % 2 !== 0);
const newNumbers = singuralNumbers.map(singuralNumber => singuralNumber * 2);
console.log('The doubled numbers are', newNumbers);