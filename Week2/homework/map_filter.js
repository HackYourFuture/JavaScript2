'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const doubleOdd = numbers
    .filter((number) => number % 2 !== 0)
    .map((number) => number * 2);

console.log(doubleOdd);