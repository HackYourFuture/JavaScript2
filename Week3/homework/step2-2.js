'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  while (startIndex <= stopIndex) {
    numbers.push(startIndex++);
  }

  for (const number of numbers) {
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  return console.log(number + ' is divisible by 3.');
}

function sayFive(number) {
  return console.log(number + ' is divisible by 5.');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
