'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let number = startIndex; number < stopIndex + 1; number++) {
    numbers[number - startIndex] = number;
    if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 3 === 0) {
      threeCallback(number);
    } else if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
}

function sayThree(arr) {
  console.log(`${arr} divisible by 3`);
}

function sayFive(arr) {
  console.log(`${arr} divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
