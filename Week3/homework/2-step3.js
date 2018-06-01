'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
    if ((i % 3 === 0) && (i % 5 === 0)) {
      threeCallback(i);
      fiveCallback(i);
    } else if (i % 5 === 0) {
      fiveCallback(i);
    } else if (i % 3 === 0) {
      threeCallback(i);
    }
  }
}
function sayThree(i) {
  console.log(i + ' is divisible by 3');
}
function sayFive(i) {
  console.log(i + ' is divisible by 5');
}

threeFive(10, 15, sayThree, sayFive);
