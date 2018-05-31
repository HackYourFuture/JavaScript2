'use strict';

const arr2d = [[1, 2], [3, 4], [5, 6]];
const arr3d = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];

// add your solution here, or add a comment on how you would tackle this problem
// //We use recursive function so it iterates through the array and check every element if
//it is array so it calls back the same function but with the array element as an argument(as it is also an array)
// and so on until the number of nested arrays is finished it return the element's value of the last array. 

function printArrayItems(arr) {
    for (let i = 0; i < arr.length; i++)
        Array.isArray(arr[i]) ? printArrayItems(arr[i]) : console.log(arr[i]);
}

printArrayItems(arr3d);
