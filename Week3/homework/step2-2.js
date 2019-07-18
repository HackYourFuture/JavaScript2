'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  console.log(numbers);
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] % 3 === 0 && numbers[j] % 5 === 0) {
      threeCallback();
      fiveCallback();
    } else if (numbers[j] % 3 === 0) {
      threeCallback();
    } else if (numbers[j] % 5 === 0) {
      fiveCallback();
    }
  }
}

function sayThree() {
  console.log(3);
}

function sayFive() {
  console.log(5);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
