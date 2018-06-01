'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

let printAllTheItems = [];

function printTheItemsOfArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {

      printAllTheItems += (arr[i][j] + ' ');
    }
  }
  console.log(printAllTheItems);
}

printTheItemsOfArray(arr3d);

printTheItemsOfArray(arr2d);
