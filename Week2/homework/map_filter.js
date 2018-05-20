'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers
  .filter(newNumber => newNumber % 2 === 0)
  .map(newNumber => newNumber * 2);

console.log(newNumbers);
