'use strict';

const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
const doubleNum = oddNumbers.map(num => num * 2);
console.log(doubleNum);
