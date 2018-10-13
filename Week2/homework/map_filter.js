'use strict';


const numbers = [1, 2, 3, 4];

// Add your code here


const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);
const doubleOddNumbers = oddNumbers.map(num => num * 2);
console.log('The doubled numbers are ', doubleOddNumbers);

