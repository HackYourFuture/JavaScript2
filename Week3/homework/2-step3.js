'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  values.forEach(value => {
    if (value % 3 === 0) {
      threeCallback(value);
    }
    if (value % 5 === 0) {
      fiveCallback(value);
    }
  });
}

threeFive(10, 15, sayThree, sayFive);

function sayThree(num) {
  console.log('Dividable by 3 ' + num);
}

function sayFive(num) {
  console.log('Dividable by 5 ' + num);
}

