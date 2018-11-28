'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  values[0] = startIndex;
  const valuesLength = stopIndex - startIndex
  for (let i = 0; i < valuesLength; i++) {
    values.push(values[i] + 1);
  }

  values.forEach(value => {

    if (value % 5 === 0) {
      fiveCallback();
    } else if (value % 3 === 0) {
      threeCallback();

    } else if (value % 5 === 0 && value % 3 === 0) {
      fiveCallback();
      threeCallback();
    }
  });
}


function sayFive() {
  console.log('the number is  divisible by 5')

}

function sayThree() {
  console.log('the number is  divisible by 3')

}
console.log(threeFive(10, 15, sayThree, sayFive))