'use strict';

console.log("pass by value!")

const x = 9;

console.log("before running function, x = " + x);

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log("after running function, still x = " + x);


//now you will see the difference

console.log("\npass by reference!")

const y = { x: 9 };

console.log("before running function, y.x = " + y.x)

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log("after running function, y.x = " + y.x);

// Add your explanation as a comment here

//In Pass by Value
//Changing the argument inside the function DOESN'T 
//affect the variable passed from outside the function.

//In Pass by Reference
//Changing the argument inside the function affect
//the variable passed from outside the function.
