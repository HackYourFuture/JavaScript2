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
function f1 takes x, but it takes the value. 
actually it takes '9'. than the variable x not affected from function.

function f2 takes y. y includes not a primitive, single value. it is an object.
and y affected from function. i understood that when variables assigned to a 
primitive value, it is just a value. but i looked up Documentation :)

>>>

i understood that
when i assign a variable to an existing one,
if the existing one is a primitive, than it copies the value to new one 
and the existing one is completely independent from any affect on new one. 
but if i assign a variable to a existing object, than it snot a copy, 
it is a reference to existing variables value. it is a way to there. than changes 
affects both variable. value is one thing, variables are like access to it or sth like that.
i sow 3 page, but i understood these from;
https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c

thanks.
*/
