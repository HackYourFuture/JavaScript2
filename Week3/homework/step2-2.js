'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let number = startIndex; number <= stopIndex; number++) {
    // numbers.push(number);
    if (number % 3 === 0 && number % 5 === 0) {
      numbers.push(threeCallback(number));
      numbers.push(fiveCallback(number));
    } else if (number % 3 === 0) {
      numbers.push(threeCallback(number));
    } else if (number % 5 === 0) {
      numbers.push(fiveCallback(number));
    }
  }
  return numbers;
}

function sayThree(number) {
  return `${number} is divisible by 3`;
}

function sayFive(number) {
  return `${number} is divisible by 5`;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
