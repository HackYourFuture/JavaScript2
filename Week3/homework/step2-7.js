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

f2(y);
console.log(y);

/* when assigning variables javascript passes objects as reference (pretty much everything is an object in JS) while assigning primitives as values
when we declare x with a number in the first part JS assigns the value of 9 in the memory and places it there and it is not changeable 
so any modifications that we do on the cons x is not passed on to that memory and the 9 there is basically untouched, when we use the variable x we are basically getting a new copy from memory

in the case of y we are dealing with an object x and objects are passed by reference so when we modify it inside the function we are actually
accessing the real value of the x object in the memory. 

the function f2 here is also an impure function because it is mutating an object outside of its lexical scope which has 
the potential to cause many headaches with side effects 


 */
