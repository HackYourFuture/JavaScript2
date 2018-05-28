'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray(arr) {

  // if arr is an array call printArray for each element else print it.
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      printArray(arr[i]);
    }
  } else console.log(arr);

}

printArray(arr3d);


// redefine multiplyAll to multiple array with K dimensions

function multiplyAll(arr) {
  let product = 1;

  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      product *= multiplyAll(arr[i]);
    }
  } else product *= arr;

  return product;
}

console.log(multiplyAll(arr3d));
