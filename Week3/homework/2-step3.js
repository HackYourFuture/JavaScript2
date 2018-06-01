'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  console.log('The generated array is ', values);

  for (let i = 0; i < values.length; i++) {

    if (values[i] % 3 === 0 && values[i] % 5 === 0) {
      console.log(threeCallback(values[i]) + ' and ' + fiveCallback(values[i]));
    } else if (values[i] % 3 === 0) {
      console.log(threeCallback(values[i]));
    } else if (values[i] % 5 === 0) {
      console.log(fiveCallback(values[i]));
    }
  }
}
const sayThree = function (x) {
  const statement1 = x + ' is multiple of 3';
  return statement1;
};
const sayFive = function (x) {
  const statement2 = x + ' is multiple of 5';
  return statement2;
};

threeFive(10, 15, sayThree, sayFive);
