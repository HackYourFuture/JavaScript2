'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let number = startIndex; number <= stopIndex; number++) {
    numbers.push(number);
    if (number % 3 === 0 && number % 5 === 0) {
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 3 === 0) {
      threeCallback(number);
    } else if (number % 5 === 0) {
      fiveCallback(number);
    }
  }
  console.log(numbers);
}

function sayThree(number) {
  console.log(`${number} is divisible by 3`);
}

function sayFive(number) {
  console.log(`${number} is divisible by 5`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
