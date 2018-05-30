'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here

  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);

    if ((i % 3 === 0) && (i % 5 === 0)) {
      threeCallback(i);
      fiveCallback(i);
    }
    else if (i % 3 === 0) {
      threeCallback(i);
    }
    else if (i % 5 === 0) {
      fiveCallback(i);
    }
  }
  return values;
}

function sayThree(value) {
  console.log(value + ' is divisible by 3');
}

function sayFive(value) {
  console.log(value + ' is divisible by 5');
}

console.log(threeFive(10, 15, sayThree, sayFive));


