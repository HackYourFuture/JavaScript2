'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values[i - startIndex] = i;
  }
  console.log('The values of the array are: ' + values);

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 3 === 0) {
      threeCallback(values, i);
    }
    if (values[i] % 5 === 0) {
      fiveCallback(values, i);
    }
  }
}

function sayThree(array, index) {
  console.log('The value(' + array[index] + ') in index ' + index + ' is dividable to 3');
}

function sayFive(array, index) {
  console.log('The value(' + array[index] + ') in index ' + index + ' is dividable to 5');
}

threeFive(10, 15, sayThree, sayFive);
