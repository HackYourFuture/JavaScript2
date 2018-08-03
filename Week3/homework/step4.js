'use strict';

// Add your code here
function createBase(parOuter){
  let inner = (parInner) => console.log(parOuter+parInner);
  
  return inner;
}

const addSix = createBase(6);

addSix(10); // returns 16
addSix(21); // returns 27
//addSix(45)
