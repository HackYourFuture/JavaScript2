'use strict';

// Add your code here

const addSix = createBase(6);

function createBase(numOne) {

    return function add(numTwo) {
        return numOne + numTwo;
    };
}

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27
console.log(addSix(78)); // returns 84
