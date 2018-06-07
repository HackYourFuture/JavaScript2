'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem

const printAllItems = (arr) =>
    arr.map((item, index) => {
        return index + ". " + item;
    }).join('\n');

console.log(printAllItems(arr2d));
console.log(printAllItems(arr3d));
