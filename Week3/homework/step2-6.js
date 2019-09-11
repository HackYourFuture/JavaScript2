'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

function flattenArray2d(arr) {
  const newArr = [];
  arr.forEach(element => {
    element.forEach(item => {
      newArr.push(item);
    });
  });
  return newArr;
}

function flattenArray3d(arr) {
  const newArr = [];
  arr.forEach(element => {
    element.forEach(item => {
      item.forEach(unit => {
        newArr.push(unit);
      });
    });
  });
  return newArr;
}

/* this can be achieved also by using flat() method.
  function flattenArray2d(){
  return arr2d.flat(); // flattens down 1 dimension
  }

  function flattenArray3d(){
  return arr3d.flat(2); // flattens down 2 dimension
  }
*/

console.log(flattenArray2d(arr2d)); // -> [1, 2, 3, 4, 5, 6]
console.log(flattenArray3d(arr3d)); // -> [1, 2, 3, 4, 5, 6, 7, 8]

// Do not change or remove anything below this line
module.exports = {
  flattenArray2d,
  flattenArray3d,
};
