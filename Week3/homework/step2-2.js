'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  const count = stopIndex - startIndex + 1;
  for (let i = 0; i < count; i++) {
    numbers.push(startIndex);
    startIndex++;
  }

  for (const item of numbers) {
    if (item % 3 === 0 && item % 5 === 0) {
      threeCallback(item);
      fiveCallback(item);
    } else if (item % 3 === 0) {
      threeCallback(item);
    } else if (item % 5 === 0) {
      fiveCallback(item);
    }
  }
}

function sayThree(number) {
  console.log(`${number} is divisible by 3.`);
}

function sayFive(number) {
  console.log(`${number} is divisible by 5.`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
