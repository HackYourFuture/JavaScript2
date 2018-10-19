'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const testNumbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    testNumbers.push(i);
  }
  testNumbers.forEach(element => {
    if (element % 3 === 0) {
      threeCallback(element);
    } if (element % 5 === 0) {
      fiveCallback(element);
    }
  });
  //instead of foreach....
  /*for (let arrVal of testNumbers) {
    if (arrVal % 3 === 0)
      threeCallback(arrVal);
    if (arrVal % 5 === 0)
      fiveCallback(arrVal);
  }*/
}
function sayThree(threeValue) {
  console.log('Divisible by 3 : ' + threeValue);
}
function sayFive(fiveValue) {
  console.log('Divisible by 5 : ' + fiveValue);
}
threeFive(10, 15, sayThree, sayFive);
