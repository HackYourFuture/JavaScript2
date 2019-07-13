'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let n = 0; n < arr.length - 1; n++) {
      newArr.push(arr[i][n]);
    }
  }
  return newArr;
}

function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  console.log(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
// console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
