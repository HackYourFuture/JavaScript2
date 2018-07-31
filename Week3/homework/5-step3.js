'use strict';
// paste your freeCodeCamp solutions in here

function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            var z = arr[i][j];
            var multiplyArr = product *= z;
            console.log(multiplyArr)
        }
    }

    return x;
}
multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]);