/*
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/


'use strict';
function createBase(numbers) {

    return function (sumNumber) {
        return numbers + sumNumber;
    }
}
let addSix = createBase(6);

console.log("The result number is " + addSix(16));
console.log("The result number is " + addSix(21));