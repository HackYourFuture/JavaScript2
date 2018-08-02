'use strict';
// paste your freeCodeCamp solutions in here

//Modify function multiplyAll so that it multiplies the 
//product variable by each number in the sub - arrays of arr

function multiplyAll(arr) {
    let product = 0;
    // Only change code below this line

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            product += arr[i][k];
        }
    }

    // Only change code above this line
    return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));