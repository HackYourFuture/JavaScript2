'use strict';

// Add your code here
function createBase(firstNum) {

    return function add(secondNum) {
        return firstNum + secondNum;
    };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
