'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const result = arr.reduce((total, item) => total.concat(item));
  return result;
}

function flattenArray3d(arr) {
  const result = arr;
  for (let i = 0; i < 2; i++) {
    result.reduce((accu, curr) => accu.concat(curr));
  }
  return result;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
