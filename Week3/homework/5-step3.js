'use strict';
// paste your freeCodeCamp solutions in here
function multiplyAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    let inerArr = arr[i];
    for (let j = 0; j < inerArr.length; j++) {
      product *= inerArr[j];
    }
  }
  return product;
}
const result = multiplyAll([[1, 2], [3, 4], [5, 6, 7]])
console.log(result);
