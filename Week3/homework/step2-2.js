'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  numbers.forEach(num => {
    if (num % 15 === 0) {
      threeCallback(num);
      fiveCallback(num);
    } else if (num % 3 === 0) {
      threeCallback(num);
    } else if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}

function sayThree(number) {
  return number;
}

function sayFive(number) {
  return number;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
