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


/* Javascript always passes by value. if you pass an object to a function, the "value" is really a reference to that object, 
so the function can modify that object's properties, but variable is primitive type  like number passed by its value, so it is not changing */
