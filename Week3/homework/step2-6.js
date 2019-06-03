'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const result = [];
  arr.forEach(x => x.forEach(y => result.push(y)));
  return result;
}

function flattenArray3d(arr, result = []) {
  arr.forEach(item => {
    if (Array.isArray(item)) {
      // If inner item is also an array I call the parent function again
      flattenArray3d(item, result);
    } else {
      result.push(item);
    }
  });

  return result;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
