'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  while ( startIndex <= stopIndex) {
    values.push(startIndex);
    startIndex++
  }
  for (let i =0; i < values.length; i++) {
    let num = values[i];
    if (num % 3 === 0) {
      threeCallback(num);
    }
    if (num % 5 === 0) {
      fiveCallback(num);
    }
  }
}

threeFive(10, 15, sayThree, sayFive);

function sayThree(num) {
  // some code
  console.log("The " + num + " is divisible by Three");
}
function sayFive(num) {
  // some code
  console.log("The " + num + " is divisible by Five");
}
