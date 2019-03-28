'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  const result = [];

  for (startIndex; startIndex <= stopIndex; startIndex++) {
    numbers.push(startIndex);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 == 0) {
      result.push(threeCallback(numbers[i]));
    } else if (numbers[i] % 5 == 0) {
      result.push(fiveCallback(numbers[i]));
    }
  }
  console.log(result);
}

function sayThree(number) {
  return number;
}

function sayFive(number) {
  return number;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
// module.exports = threeFive;
