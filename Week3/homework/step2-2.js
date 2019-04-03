'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number);
    if (number % 3 === 0) {
      threeCallback(number);
    }
    if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  return number % 3 === 0;
}

function sayFive(number) {
  return number % 5 === 0;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
