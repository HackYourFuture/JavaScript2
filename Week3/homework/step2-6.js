'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  // return arr.flat(1);
  const flattedArray2d = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flattedArray2d.push(arr[i][j]);
    }
  }
  return flattedArray2d;
}

function flattenArray3d(arr) {
  // return arr.flat(2);
  const flattedArray3d = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        flattedArray3d.push(arr[i][j][k]);
      }
    }
  }
  return flattedArray3d;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
