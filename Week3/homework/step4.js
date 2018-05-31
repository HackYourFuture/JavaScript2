'use strict';

function createBase(a) {
    return function (b) {
        return a + b;
    };
}

const addSix = createBase(6);

addSix(10);
addSix(21);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
