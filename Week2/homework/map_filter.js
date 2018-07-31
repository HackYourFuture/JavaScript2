'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers.filter(x => x %2 ).map(x => x * 2);

console.log(`the double numbers are`, newNumbers);
 