'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
function print3D(myArr) {
    if (Array.isArray(myArr)) {
        myArr.forEach(elem => print3D(elem));
    } else {
        console.log(myArr);
    }
}

print3D(arr3d);
