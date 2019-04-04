'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return arr.flat();
}

function flattenArray3d(arr) {
  return arr.flat(2);
}
// for k dimension the depth should be k -1
function flattenArrayKd(arr, k) {
  return arr.flat(k - 1);
}
console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArrayKd(arr3d, 3));
// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
