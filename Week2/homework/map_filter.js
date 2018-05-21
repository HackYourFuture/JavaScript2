'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here
const newNumbers = numbers.filter((x) => x % 2 !== 0)
    .map((x) => 2 * x);

console.log('The new array with doubled odd numbers is: ', newNumbers);
