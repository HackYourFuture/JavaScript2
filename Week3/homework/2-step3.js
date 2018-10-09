'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    values.push(i);
  }
  values.forEach(element => {
    if (element % 3 === 0)
      threeCallback(element);
    if (element % 5 === 0)
      fiveCallback(element);
  });
  //instead of foreach....
  /*for (let arrVal of values) {
    if (arrVal % 3 === 0)
      threeCallback(arrVal);
    if (arrVal % 5 === 0)
      fiveCallback(arrVal);
  }*/
  console.log(values);
}
function sayThree(threeValue) {
  console.log('Divisible by 3 : ' + threeValue);
}
function sayFive(fiveValue) {
  console.log('Divisible by 5 : ' + fiveValue);
}
threeFive(10, 15, sayThree, sayFive);
