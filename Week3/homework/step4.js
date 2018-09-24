'use strict';

function createBase(num) {
    return function (num1) {
        return num + num1;
    };
}

var addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
