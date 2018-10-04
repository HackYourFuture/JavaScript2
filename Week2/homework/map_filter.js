'use strict';

// 2.1
let numbers = [1, 2, 3, 4, 5, 6];

// const oddNumbers = numbers.filter(n => n % 2 !== 0);
// const doubleOdds = oddNumbers.map(n => n * 2);

// console.log(`The odd numbers are: ${oddNumbers}, and doubled are: ${doubleOdds}.`);

// For cleaner code i can chaining this methods.

const items = numbers
  .filter(n => n % 2 !== 0)
  .map(n => n * 2);

console.log(items);
