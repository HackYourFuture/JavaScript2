const x = 9; // x is assigned a primitive value
function f1(val) {
  val = val + 1;
  return val;
}
f1(x); // a copy of the variable x is passed into the function and processed
console.log(x); // we are logging the "original" value of x

const y = { x: 9 }; // y is assigned an object
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y); // a reference to the object y is passed into the function and processed
console.log(y); // the reference to y is logged to console

// Add your explanation as a comment here
/*
In sum, ALL objects interact by reference in Javascript 
so when passing to a function they all point to the same location 
so when you change one object you change them all. 
This is a stark difference compared to pass by value that copies the value into two separate spots in memory effectively 
making them entirely separate entities despite one initially being set equal to the other.
https://codeburst.io/javascript-passing-by-value-vs-reference-explained-in-plain-english-8d00fd06a47c
*/

