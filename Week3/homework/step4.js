'use strict';

// Add your code here

function createBase(value) {

    const addNum = function (num) {
        return value + num;
    };
    return addNum;
}

const addSix = createBase(6);

const result1 = addSix(10);
console.log(result1); // returns 16
const result2 = addSix(21);
console.log(result2);// returns 27
