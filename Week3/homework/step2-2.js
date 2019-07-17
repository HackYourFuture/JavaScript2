'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
    }
    if (numbers[i] % 5 === 0) {
      fiveCallback(numbers[i]);
    }
    if (numbers[i] % 5 === 0 && numbers[i] % 3 === 0) {
      threeCallback(numbers[i]);
      console.log('divisible numbers to 3 , 5: ' + numbers[i]);
    }
  }
}

function sayThree(number) {
  const divThree = [];
  divThree.push(number);
  console.log('divisible numbers to 3: ' + divThree);
}

function sayFive(number) {
  const divFive = [];
  divFive.push(number);
  console.log('divisible numbers to 5: ' + divFive);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
// eslint-disable-next-line prettier/prettier
module.exports = threeFive;