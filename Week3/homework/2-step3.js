'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (startIndex; startIndex <= stopIndex; startIndex++) {
      values.push(startIndex);
  }
  for (const i in values) {
      if (values[i] % 3 === 0) {
          threeCallback(values[i]);
      } else values[i] % 5 === 0;
      fiveCallback(values[i]);
  }
}

function sayThree(values) {
  console.log(values + " can be divided by 3");
}

function sayFive(values) {
  console.log(values + " can be divided by 5");
}

threeFive(10, 15, sayThree, sayFive);
