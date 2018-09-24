'use strict';
function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let o = 0; o < arr[i].length; o++) {
            product = product * arr[i][o];
        }
    }

    return product;
}


// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

