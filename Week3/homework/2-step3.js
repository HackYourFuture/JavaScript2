'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
    if (i % 3 == 0) {
      threeCallback();
    }
    if (i % 5 == 0) {
      fiveCallback();
    }
  }
  return console.log(values);
}

const sayThree = () => console.log('sayThree');
const sayFive = () => console.log('sayFive');

threeFive(10, 15, sayThree, sayFive);


