'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      threeCallback([i]);
    } else if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    } else if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    }
  }
  console.log(startIndex, stopIndex, threeCallback(numbers), fiveCallback(numbers), numbers);
}

function sayThree(number) {
  return `${number} is divisible by three!`;
}

function sayFive(number) {
  return `${number} is divisible by five!`;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
