'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(array) {
  const newArray = [];
  (function flat(ary) {
    ary.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else newArray.push(el);
    });
  })(array);
  return newArray;
}
function flattenArray3d(array) {
  const newArray = [];
  (function flat(ary) {
    ary.forEach(function(el) {
      if (Array.isArray(el)) flat(el);
      else newArray.push(el);
    });
  })(array);
  return newArray;
}

flattenArray2d(arr2d);
flattenArray3d(arr3d);

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
