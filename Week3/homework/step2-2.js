'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let num = startIndex; num <= stopIndex; num++) {
    numbers.push(num);
  }

  numbers.forEach(num => {
    console.log(num);

    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
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
