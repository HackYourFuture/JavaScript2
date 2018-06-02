'use strict';
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }


  // Only change code above this line
  return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1], [2], [3]]));//return 6
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); //return 5040
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])); //return 54

