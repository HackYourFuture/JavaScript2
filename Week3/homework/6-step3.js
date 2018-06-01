'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
// this solution is only works for arr3d
function printArray(a) {
    for (var i = 0; i < a.length; i++) {
        for (var z = 0; z < a[i].length; z++) {
            for (var y = 0; y < a[i][z].length; y++)
                console.log(a[i][z][y]);
        }
    }
}

printArray(arr3d)
