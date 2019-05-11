'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
    if (i % 3 === 0 && i % 5 === 0) {
      threeCallback(i), fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  return numbers;
}

function sayThree(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' can be divided by 3');
}

function sayFive(number) {
  // Replace this comment and the next line with your code
  console.log(number + ' can be divided by 5');
}

threeFive(10, 15, sayThree, sayFive);
