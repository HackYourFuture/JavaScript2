"use strict";

const numbers = [1, 2, 3, 4];

let doubledOddNumbers = numbers
  .filter(number => number % 2 === 1)
  .map(oddNumber => oddNumber * 2);
console.log(doubledOddNumbers);
