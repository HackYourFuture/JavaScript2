'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const oddNumbers = numbers.filter(number => {
    return number % 2 !== 0;
});
console.log(oddNumbers);

const newNumbers = oddNumbers.map(number => {
    return number * 2;
});

console.log('The doubled numbers are', newNumbers);

