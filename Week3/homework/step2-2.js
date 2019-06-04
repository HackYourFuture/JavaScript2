'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = 0; i <= stopIndex - startIndex; i++) {
    numbers.push(startIndex + i);
  }

  for (const number of numbers) {
    if (!(number % 3)) {
      threeCallback(number);
      if (!(number % 5)) {
        fiveCallback(number);
      }
    } else if (!(number % 5)) {
      fiveCallback(number);
    }
  }
}

function sayThree(number) {
  console.log(`Number: ${number} is divisible by 3!`);
}

function sayFive(number) {
  console.log(`Number: ${number} is divisible by 5!`);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
