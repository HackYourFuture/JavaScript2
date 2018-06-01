'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
function printAllArrayItems(arr) {
  if (typeof arr !== 'object') {
    console.log(arr); // a break condition for recursive use
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (printAllArrayItems(arr[i])) {
        console.log(printAllArrayItems(arr[i]));
      }
    }
  }
}

printAllArrayItems(arr2d);
printAllArrayItems(arr3d);
