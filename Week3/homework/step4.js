'use strict';

// Add your code here
function createBase(num) {
    return function (num2) {
        console.log(num + num2);
    }
}
const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
