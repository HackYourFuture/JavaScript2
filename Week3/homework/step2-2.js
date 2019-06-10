'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  const len = Math.abs(stopIndex - startIndex);

  for (let i = 0; i <= len; i++) {
    numbers.push(i + startIndex);
  }

  numbers.forEach(function(element) {
    if (element % 3 === 0) {
      threeCallback(element);
    }
    if (element % 5 === 0) {
      fiveCallback(element);
    }
  });
}

function sayThree(number) {
  console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
