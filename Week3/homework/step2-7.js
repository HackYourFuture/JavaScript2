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

// when we pass a variable in a function and that variable holds a number, javascript will take a copy of mentioned
// variable and it passes the copy in that function. that means: the value of x in the first example doesn't change
// because we passes a copy of x....
// While in the second example we pass a variable that holds an object and here is the difference. WHen we pass an
// object in a function, javascript takes that object a REFERENCE and modifies it.
