'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = numbers.filter(number => number % 2 !== 0); // filter the odd nrs
  const doubleNumbers = newNumbers.map(number => number * 2); // double the odd nrs
  return doubleNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers)); // [2, 6] the double of [1,3]

