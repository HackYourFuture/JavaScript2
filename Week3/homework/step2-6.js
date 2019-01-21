'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  let value = '';
  for (let i = 0; i < arr.length; i++) {
    value += arr[i];
  }
  return console.log(value);
}

function printArray3d(arr) {
  let value = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      value += arr[i][j];
    }
  }
  return console.log(value);
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
