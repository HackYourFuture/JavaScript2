'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

//I would tackle this problem by using a forEach() method, which execute a callback function for every element of the array, this way I could print how many nested elements there are. 

function matrix(arr) {
    arr.forEach(function(a, b) {
      console.log(a, b);
    });
  }
  matrix(arr3d);
