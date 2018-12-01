'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
    if (i % 3 === 0) {
      threeCallback();
    }
    if (i % 5 === 0) {
      fiveCallback();
    }
    if (i % 3 === 0 && i % 5 === 0)
      threeCallback();
    fiveCallback();
  }

}

function sayThree() {
  console.log('value is divisible by 3');
}

function sayFive() {
  console.log('value is divisble by 5');
}


threeFive(10, 15, sayThree, sayFive);
