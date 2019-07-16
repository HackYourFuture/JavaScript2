'use strict';

// function createBase(baseNumber) {
//   return function(addNumber) {
//     return addNumber + baseNumber;
//   };
// }
const createBase = baseNumber => addNumber => baseNumber + addNumber; // Currying

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
