'use strict';

function doubleOddNumbers(numbers) {
  const doubleNumbers = numbers.filter(number => number % 2 === 1).map(number => number * 2);
  return doubleNumbers;
}

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
