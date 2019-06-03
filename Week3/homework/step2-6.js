'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  while (arr.find(item => typeof item === 'object') !== undefined) arr = [].concat(...arr);
  return arr;
}

function flattenArray3d(arr) {
  while (arr.find(item => typeof item === 'object') !== undefined) arr = [].concat(...arr);
  return arr;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

/* I just wrote one function for flattening those two arrays because it works for both arrays. Moreover as
long as array does not have an object, it flattens any dimension. */
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
