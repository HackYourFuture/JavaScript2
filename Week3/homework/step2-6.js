'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const new2d = arr.reduce(function(acc, curr) {
    return Array.isArray(curr) ? acc.concat(curr) : acc.concat(curr);
  }, []);
  return new2d;
}

function flattenArray3d(arr) {
  const new3d = arr.reduce(
    (acc, curr) => (Array.isArray(curr) ? acc.concat(flattenArray3d(curr)) : acc.concat(curr)),
    [],
  );
  return new3d;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
