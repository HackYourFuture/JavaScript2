'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(number => {
    if (number % 15 === 0) {
      threeCallback(number);
      fiveCallback(number);
    } else if (number % 3 === 0) {
      threeCallback(number);
    } else if (number % 5 === 0) {
      fiveCallback(number);
    }
  });
}

function sayThree() {
  // eslint-disable-next-line no-template-curly-in-string
  console.log('sayThree is called ${num}');
}

function sayFive() {
  // eslint-disable-next-line no-template-curly-in-string
  console.log('sayFive is called ${num}');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
