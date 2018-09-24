"use strict";

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
function getValues(arr) {
  const items = arr.toString().split(",");
  for (let i in items) {
    console.log(items[i]);
  }
}
getValues(arr3d);
