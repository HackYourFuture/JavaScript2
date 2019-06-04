'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arr4d = [[[[1, 2], [3, 4]]], [[[5, 6], [7, 8]]], [[[9, 10], [11, 12]]]];
const arrSoup = [
  [[[[1, 2], [[['aa', 'bb']]], [3, [['cc', [[['dd']]]]], 4]]]],
  [[[5, 6], [[[[[[[[[[[[[[[[['zz']]]]]]]]]]]]]]]]], [7, 8]]],
  [[[9, 10], [11, 12]]],
];

// for any nested arrays regardless of dimensions
const flattenNestedArray = (arr, newArray = []) => {
  arr.forEach(element => {
    if (Array.isArray(element)) {
      flattenNestedArray(element, newArray);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
};

function flattenArray2d(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArray.push(arr[i][j]);
    }
  }
  return newArray;
}

function flattenArray3d(arr) {
  return flattenNestedArray(arr);
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenNestedArray(arr4d)); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(flattenNestedArray(arrSoup));
// -> [1, 2, "aa", "bb", 3, "cc", "dd", 4, 5, 6, "zz", 7, 8, 9, 10, 11, 12]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
