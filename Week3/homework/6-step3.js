'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
var table = new Array(5);

table[0] = [45.89, 4, 34, 9998.99, 56]; // first row
table[1] = [3, 23, 99, 43, 2]; // second row
table[2] = [1, 1, 0, 43, 67]; // third row
let row = 3;
let column = 5;
for (let i = 0; i < row; i++) {
  console.log("");
  for (let j = 0; j < column; j++) {
    process.stdout.write(table[i][j] + "\t\t");
    //console.log(table[i][j] + "   ");
  }
}


// add your solution here, or add a comment on how you would tackle this problem
/*for (let i = 0; i < arr3d.length; i++) {
  for (let j = 0; j < arr3d[i].length; j++) {
    console.log(arr3d[i][j]);
  }
}*/