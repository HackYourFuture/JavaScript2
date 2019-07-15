'use strict';

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);

console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);

console.log(y);

// As Jash explained in this and earlier lessons,
// 1 st snippet writes 9 and 2n d writes { x: 10,}. JS calls by value, but in object and other complex data types with reference.
// we used 9 and made val value 10, but it did not change x variable 's value. Complex data types such as object take place in memory.
// So we modified the value of const y which has place in the memory,reference. So we are manipulating the memory place.
