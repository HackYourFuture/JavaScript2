'use strict';

// Add your code here
function createBase(base) {
  function addToBase(value) {
    return base + value;
  }
  return addToBase;

  const addSix = createBase(6);

  addSix(10); // returns 16
  addSix(21); // returns 27
}