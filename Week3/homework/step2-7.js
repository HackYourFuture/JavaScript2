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

// The short answer is primitives are data types, while references are pointers, which do not hold their values but point to their values and are used on/with objects. Java has eight primitive type: int, double, float, long, short, byte, char, boolean. ... Primitive types require between one and eight bytes of memory.
