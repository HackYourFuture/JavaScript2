'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here

  for (startIndex; startIndex <= stopIndex; startIndex++) {
    values.push(startIndex);
  }
  console.log('Array created is: [' + values + ']');
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 3 === 0) {
      threeCallback(values[i]);
    }
    if (values[i] % 5 === 0) {
      fiveCallback(values[i]);
    }
  }
}
function sayThree(num) {
  console.log(num + ' is divisible by three');
}
function sayFive(num) {
  console.log(num + ' is divisible by five');
}

threeFive(10, 15, sayThree, sayFive);
