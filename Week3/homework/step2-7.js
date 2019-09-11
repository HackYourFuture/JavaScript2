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
/*
First snippet: (Passing primitives). 
Primitives (Number, String, etc) are always pass-by-value.
A distinct copy of the value is passed to the function; changes to it have no effect outside the function. 
therefor console.log(x); // will log 9 
 

Second snippet: (Passing an objects).
A reference to the object value is passed to the function. 
If the function modifies the values through the passed reference, the modification 
is visible outside the function. Therefor console.log(y); // will log 10

Ref. 1: https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language#3638034
Ref. 2: https://docstore.mik.ua/orelly/webprog/jscript/ch11_02.htm */
