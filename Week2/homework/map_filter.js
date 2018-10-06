'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 !== 0) {
//     newNumbers.push(numbers[i] * 2);
//   }
// }
newNumbers = numbers.filter(el => el % 2 !== 0).map(el => el*2)

console.log('The doubled numbers are', newNumbers);
