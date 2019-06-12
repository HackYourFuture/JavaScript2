'use strict';

// ES5
// function createBase(base) {
//   return addition => base + addition;
// }

// ES6
const createBase = base => addition => base + addition;

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
