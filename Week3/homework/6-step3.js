'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

function print(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        print(arr[i]);
      } else console.log(arr[i]);
    }
  }
}
print(arr3d);
print(arr2d);
