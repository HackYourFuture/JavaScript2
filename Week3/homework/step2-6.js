'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const result = arr.reduce((acc, x) => acc.concat(x));
  return result;
}

function flattenArray3d(arr) {
  let result = arr;
  for (let cnt = 0; cnt < 2; cnt++) {
    result = result.reduce((acc, x) => acc.concat(x));
    console.log(arr);
  }

  return result;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

/** ANSWER for more than 3 dimensional arrays
 * We can get the array dimensions and we can loop over it. In that case, we can flatten all multidimensional arrays.
 * https://gist.github.com/srikumarks/4303229 in this link there is a code for getting dimensions.
 */

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
