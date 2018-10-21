'use strict';

// Add your code here
function createBase(x) {
  return function (y) {
    return x + y;
  }
}
const addSix = createBase(6);

console.log(addSix(10));
console.log(addSix(21));

//Solution with arrow function
const createBase1 = base => num => base + num;

const addSix1 = createBase1(6);
console.log(addSix1(10)); // returns 16
console.log(addSix1(21)); // returns 27
