'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  return [].concat(...arr);
}

// to enable deep level flatten used recursion with reduce and concat
function flattenArray3d(arr) {
  return arr.reduce(function(prev, curr) {
    if (Array.isArray(curr)) {
      return prev.concat(flattenArray3d(curr));
    }
    return prev.concat(curr);
  }, []);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
