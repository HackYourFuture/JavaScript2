'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (startIndex; startIndex <= stopIndex; startIndex++) {
    numbers.push(startIndex);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    } else if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
    } else if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    }
  }
  console.log(numbers);
}

function sayThree(number) {
  return console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  return console.log(number + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
