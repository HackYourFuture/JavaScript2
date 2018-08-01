'use strict';

const arr1d = [1, 2, 3, 4];
const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const arr4d = [0, [[[1, 2], 2.5, [3, 4]], [[5, 6], [7, 8]]], [[[9, 10], [11, 12]], [[13, 14], [15, 16]]]];

// add your solution here, or 
//add a comment on how you would tackle this problem

function printAllArr(arr1) {

    let myArr = [];

    printInArr(arr1);

    function printInArr(arr2) {

        for (let i = 0; i < arr2.length; i++) {
            if (typeof arr2[i] == "number") {
                myArr.push(arr2[i]);
            } else {
                printInArr(arr2[i]);
            }
        }
    }

    return myArr;
}

console.log(printAllArr(arr4d));