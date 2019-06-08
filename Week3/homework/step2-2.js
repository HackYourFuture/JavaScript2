'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
};

  function sayThree(number) {
  return `The number ${number} is divisible by 3.`;
};

function sayFive(number) {
  return `The number ${number} is divisible by 5.`;
};

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;

