'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  for (const value of numbers) {
    if (value % 3 === 0) {
      threeCallback(value);
      if (value % 5 === 0) {
        fiveCallback(value);
      }
    }
    if (value % 5 === 0 && !(value % 3 === 0)) {
      fiveCallback(value);
    }
  }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
}

function sayThree(number) {
  console.log('Number ' + number + ' is divisible by 3.');
}

function sayFive(number) {
  console.log('Number ' + number + ' is divisible by 5.');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
