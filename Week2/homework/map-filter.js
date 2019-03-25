'use strict';

function doubleOddNumbers(numbers) {
  const oddNumbers = numbers.filter(number => number % 2 === 1); // filter the odd numbers and then returns a new array.
  const doubleNumbers = oddNumbers.map(elem => elem * 2); // doubled the numbers in the filtered array and then returns a new array.
  return doubleNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
