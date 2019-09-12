'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);
// X has primitive type which is number, by default it pass by value in function.
// because of that when function f1 reassigned x to another value(x + 1) inside the function, the original value has not been effected.

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// y has reference type which is object, by default it pass by reference in function.
// because of that the reference can be assigned to anything else, it won’t affect the real object.
// But on the other hand, it also can be used to modify the original object
