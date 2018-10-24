'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(num => {
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  });
}

// uses a closure
function sayDivisibleBy(divisor) {
  return function (num) {
    console.log(`${num} is divisible by ${divisor}`);
  };
}

function sayThree(number) {
  sayDivisibleBy(3)(number);
}

function sayFive(number) {
  sayDivisibleBy(5)(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove the next line
module.exports = threeFive;
