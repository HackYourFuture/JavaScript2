'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push[i];
  }
  values.forEach(value => {
    if (value % 3 === 0 && value % 5 === 0) {
      threeCallback(value);
      fiveCallback();
    } else if (value % 3 === 0) {
      threeCallback(value);
    } else if (value % 5 === 0) {
      fiveCallback(value);
    }
  })
}
function sayThree(value) {
  console.log('can be divided by three');
}

function sayFive(value) {
  console.log('can be divided by five');
}

threeFive(10, 15, sayThree, sayFive);

