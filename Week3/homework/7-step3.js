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

// In this article is explained easily. 
//https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c

//Basically it says that when we have two primitives, copies are made by the system. If we change the value of-
//one of the original primitives, those will affect the outcome of only those, and not that of the copies, since
//the copies are not aware of the changes. Hence two different results will come out.

