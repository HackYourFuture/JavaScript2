'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let num = startIndex; num <= stopIndex; num++) {
    numbers.push(num);
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
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
