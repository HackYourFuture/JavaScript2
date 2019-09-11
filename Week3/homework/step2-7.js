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
/**
 * For function f1(x):
 *  x is type of number, it is not an object, so that it is passed by value.
 *  And the parameter val of f1 function is not pointing the variable x when we pass it as argument.
 *  It just copies its value.
 *  And also; even if x were an object, and passed by reference, because it is defined as const, its value will remain the same.
 *
 * For function f2(y):
 *  y is type of object, and it is passed by reference to the function f2.
 *  The const declaration creates a read-only reference to a value.
 *  It does not mean the value it holds is immutable, just that the variable identifier cannot be reassigned.
 *  So, if the const declared variable is of type object, we can change the objects properties.
 *  And y has a property named x. When we call function f2, and pass y as parameter, it is passed by reference.
 *  And f2 function changes the property of the y, so there is no conflict with const declaration.
 *  Because, y is passed by reference to the function f2, f2 changes the properties of actual y, not its copy.
 */
