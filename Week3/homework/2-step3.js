'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  for (let i = startIndex; i < stopIndex + 1; i++) {
    values.push(i);
  };

  //this is added in order to check the array.
  console.log(values);

  for (let k = 0; k < values.length; k++) {

    if (values[k] % 3 == 0 && values[k] % 5 == 0) {
      threeCallback(values[k]);
      fiveCallback(values[k]);

    } else if (values[k] % 3 == 0) {
      threeCallback(values[k]);

    } else if (values[k] % 5 == 0) {
      fiveCallback(values[k]);

    } else { null; }
  }
}

const sayThree = (x) => { console.log(`${x} is divisible by 3.`) };

const sayFive = (y) => { console.log(`${y / 5} is ${y} divided by 5.`) };

threeFive(10, 15, sayThree, sayFive);
