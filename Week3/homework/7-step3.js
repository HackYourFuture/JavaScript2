'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);


const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

/*In Javascript all the primitives are passed by value 
so it means we only manipulate the value in the function and
once the function is finished, our variable has still the 
same value. Unlike Objects that are passed by reference and once 
you change it using even functions the object will be also changed*/
