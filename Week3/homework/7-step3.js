'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
/* we called a function and we sent the value of a variable x (10) so the output of this function
is 10 but we printed just the value of a constant variable that has a value of 10  */
// here we gonna assign the output of f1 to a variable
const u = f1(x);
console.log('u : ', u);
/* ******************************* */

/* here we have an object and we have changed the value of a property x so the value is changed even the object is 
a constant but the properties will be able to change */
const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// Add your explanation as a comment here

