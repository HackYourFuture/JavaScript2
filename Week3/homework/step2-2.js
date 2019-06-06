'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  const len = Math.abs(stopIndex - startIndex);

  for (let i = 0; i <= len; i++) {
    numbers.push(i + startIndex);
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
      // console.log('\n' + numbers[i] + ' is divisible by both 3 and 5\n');
      // eslint-disable-next-line no-continue
      continue;
    }
    if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
    }
    if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    }
  }
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
