'use strict';

const numbers = [1, 2, 3, 4];

// Add your code here

// const newNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   console.log(newNumbers);

const newNum = numbers.filter(numbers => numbers % 2 !== 0).map(numbers => numbers * 2);
// console.log(newNum);

