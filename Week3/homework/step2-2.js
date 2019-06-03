'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i < stopIndex + 1; i++) {
    numbers.push(i);
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
      console.log(numbers[i] + ' divisible by 3 and 5');
    } else if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
      console.log(numbers[i] + ' divisible by 3');
    } else if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
      console.log(numbers[i] + ' divisible by 5');
    }
  }
}

function sayThree(number) {
  return number;
}

function sayFive(number) {
  return number;
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
