"use strict";

const numbers = [1, 2, 3, 4];

let doubledOddNumbers = numbers
  .filter(number => number % 2 === 1) // filtering and keeping only the odd numbers
  .map(oddNumber => oddNumber * 2); // multiplying the filtered numbers (odd) by two
console.log(doubledOddNumbers);
