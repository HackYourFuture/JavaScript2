'use strict';

// 2.1
const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers
  .filter(n => n % 2 !== 0)
  .map(n => n * 2);
