'use strict';

// #region primitive variables
const x = 9;
function f1(val) {
  val = val + 1;
  console.log(val === x);
  return val;
}
f1(x);
console.log(x);

const bool = false;
function f2(val) {
  val = true;
  console.log(val === bool);
  return val;
}
f2(bool);
console.log(bool);

const str = 'My variable is string';
function f3(val) {
  val = 'New string';
  console.log(val === str);
  return val;
}
f3(str);
console.log(str);
// #endregion primitive variables

// #region objects
const y = { x: 9 };
function f4(val) {
  val.x = val.x + 1;
  console.log(val.x === y.x);
  return val;
}

f4(y);

console.log(y);

const arr = ['1', '2', '3'];
function f5(val) {
  val.push('4', '5');
  console.log(val === arr);
  return val;
}

f5(arr);

console.log(arr);
// #endregion objects

/**
 * When I compare parameters with the actual variable. Second one points out the original object reference.
 * There are basically two types of variable. Primitive variable and objects. Primitive variables pass by value.
 * That's why this does not change the original variables. But objects(arrays and js objects) pass by reference. This
 * change the actual value. We can see this difference with '===' comparison.
 */
