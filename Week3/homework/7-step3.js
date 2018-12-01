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

//javascript has primitive type of datas such as nummbers, booleans, string, null and undefined 
//and most others such as fuctions, arrays and objects are object type datas.
//the primitive types of datas are passed by value and the object types are passed by a reference.
//the primitive data types are stored in a different memory address/spot when they are passed 
//they pass the copy of the original data. so they are immutable, which means that once created they can not be modified
//when working with objects the original object dosen't create a new object, it works by reference
//if we change the value of primitive inside a function, this change doesn't affect the variable in the outer scope
//when passing by reference, it is passing something that points to something else, not its copy
//so when we change a property of an oject within a function which is actually passed by reference
//the change will be refelected in the outer scope
//src: https://hackernoon.com/grasp-by-value-and-by-reference-in-javascript-7ed75efa1293
