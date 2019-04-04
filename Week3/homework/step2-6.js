'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const flatten = [];

  for (const partial of arr) {
    for (const flat of partial) {
      flatten.push(flat);
    }
  }

  return flatten;
}

function flattenArray3d(arr) {
  const flatten = flattenArray2d(flattenArray2d(arr));
  // It also can be done by 3 times nested for loop
  return flatten;
}

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};

/*
// for K dimension below function can be used. But it won't be efficient.

function flattenArrayKDimension(arr) {
  // to find the dimension of array
  let dimension = 0;
  let i = arr;
  while (typeof i === 'object') {
    i = i[0];
    dimension++;
  }

  // function to reduce dimension of array
  function flattierArray(wholeArray) {
    const flatten = [];
    for (const partial of wholeArray) {
      for (const flat of partial) {
        flatten.push(flat);
      }
    }

    return flatten;
  }

  //
  let arrayOfNumbers = [arr];

  for (let counter = 0; counter < dimension; counter++) {
    arrayOfNumbers = flattierArray(arrayOfNumbers);
  }

  return arrayOfNumbers;
}
*/
