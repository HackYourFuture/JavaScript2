'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here
  let arrLength = stopIndex - startIndex;
  for (let i = 0; i <= arrLength; i++) {
    values[i] = startIndex;
    startIndex++;
  }
  // console.log(values);

  values.forEach((value) => {
    if (value % 3 === 0 && value % 5 === 0) {
      threeCallback();
      fiveCallback();
    } else if (value % 3 === 0) {
      threeCallback();
    } else if (value % 5 === 0) {
      fiveCallback();
    }
  });

}

function sayThree() {
  console.log("can be divided by 3");
}

function sayFive() {
  console.log("can be divided by 5");
}
threeFive(10, 15, sayThree, sayFive);