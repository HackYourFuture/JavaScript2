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

/* In javascript it's always pass by reference.when a variable refers to an object which includes array, 
the value is the reference to the object. 

When assigning a variable (x) a primitive value the equals operator sets up a location (address) in memory 
to store the information and points the variable (x) to that address. value copies the value into two separate spots in memory effectively making them entirely separate entities despite one initially being set equal to the other
so we will take the value of the first assignment.

All objects interact by reference in Javascript so when setting equal to each other or passing to a function they all point to the same location so when you change one object you change them all. This is a stark difference compared to pass by value.
that's why y will change value when it work in the function because object change
*/
