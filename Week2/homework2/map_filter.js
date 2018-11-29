'use strict';

const numbers = [1, 2, 3, 4];

const newNumbers = numbers.filter(number => number % 2);
const finalNumbers = newNumbers.map(number => number * 2);
console.log('The final numbers are ' + finalNumbers);