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

/**
 * Inside f1 function a new variable (val) is being created instead of x.
 * We use x as an argument but we don't manipulate it.
 * If we assign f1 function to a new variable, then we can get the expected value.
 * /////////////////////////////////
 * // const altX = f1(x)        ///
 * // console.log(altX) --> 10 ///
 * //////////////////////////////
 */

/**
 * Reference types (object/array) are different from primitive types.
 * Each object/array has a reference address in disk. If we reassign an object, its address will be changed.
 * Then it will never be reassigned and its address will never be changed.
 * But if we change a property of an object, then the object will be manipulated. But the address still will be the same.
 * No matter in which scope we change the property, we get the manipulated object.
 * Even if we assign our object to a new object, changing the property of the new object will effect the original object.
 * If we make our object immutable we have to use different techniques for immutability.
 * /////////////////////////////////
 * // function f2(val) {
        val = { x: 10 }; --> this create a new reference address. If we log y, we get { x: 9 }.
        return val;
      } 
 * //////////////////////////////
 */
