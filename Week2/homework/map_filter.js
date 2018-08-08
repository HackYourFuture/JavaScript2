'use strict';

const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter((number) => number % 2 !== 0);
console.log(oddNumbers);

const doubledNumbers = oddNumbers.map((number) => number * 2);
console.log(doubledNumbers);
