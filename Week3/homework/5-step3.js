"use strict";

// paste your freeCodeCamp solutions in here
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let childArray in arr) {
    for (let item in arr[childArray]) {
      product *= arr[childArray][item];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
