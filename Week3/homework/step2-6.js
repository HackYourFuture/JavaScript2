'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.flat(); // depth = 1
}

function flattenArray3d(arr) {
  return arr.flat(2); // depth = 2
}
// for unknown number of depths.
const arrXd = [[1, [2, 2, [3, [4, [5, [6]]]]], 1]];
function flattenWithXDimension(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenWithXDimension(arrXd));

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
