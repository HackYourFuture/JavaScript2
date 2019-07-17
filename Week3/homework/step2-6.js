'use strict';

// eslint-disable-next-line prettier/prettier
const arr2d = [
  [1, 2],
  [3, 4],
  [5, 6]
];
// eslint-disable-next-line prettier/prettier
const arr3d = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];

function flattenArray2d(arr) {
  // arr.flat();
  console.log(arr);
}

function flattenArray3d(arr) {
  // Replace this comment and the next line with your code
  console.log(arr);
}

console.log(arr2d.flat); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
  // eslint-disable-next-line prettier/prettier
};