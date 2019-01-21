'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function printArray2d(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i].join('');
  }
  return console.log(result);
}

function printArray3d(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j].join('');
    }
  }
  return console.log(result);
}

printArray2d(arr2d);
printArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  printArray2d,
  printArray3d
};
