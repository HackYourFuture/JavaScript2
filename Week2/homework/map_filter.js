'use strict';

const numbers = [1, 2, 3, 4];
const singularNumbers = numbers.filter(number => number % 2 !== 0);
const newNumbers = singularNumbers.map(singularNumber => singularNumber * 2);
  console.log('The doubled numbers are', newNumbers);