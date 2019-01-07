'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  // let numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  values.map(a => {
    if (a % 3 === 0) {
      threeCallback();
    }
    if (a % 5 === 0) {
      fiveCallback();
    }
    if (a % 3 === 0 && a % 5 === 0) {
      threeCallback();
      fiveCallback();
    }
  });
}

threeFive(10, 15);
