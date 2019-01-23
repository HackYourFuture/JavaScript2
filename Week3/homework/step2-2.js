'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let generatedValue = startIndex; generatedValue <= stopIndex; generatedValue++) {
    numbers.push(generatedValue);
  }

  numbers.forEach(number => {
    if (!(number % 3)) {
      threeCallback(number);
    }
    if (!(number % 5)) {
      fiveCallback(number);
    }
  });
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
