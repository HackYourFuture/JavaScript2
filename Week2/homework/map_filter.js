'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers.filter(isOdd => isOdd %2 !== 0).map(num => num * 2);
console.log(newNumbers);
