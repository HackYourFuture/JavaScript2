'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let num = startIndex; num <= stopIndex; num++) {
    console.log(num);

    if (num % 3 === 0 && num % 5 === 0) {
      threeCallback(num);
      fiveCallback(num);
    } else if (num % 3 === 0) threeCallback(num);
    else if (num % 5 === 0) fiveCallback(num);
  }
  console.log(startIndex, stopIndex, threeCallback, fiveCallback, numbers);
  return numbers;
}

function sayThree(number) {
  console.log(number);
}

function sayFive(number) {
  console.log(number);
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;
