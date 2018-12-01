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

// in the first example we made a varible then a function with a parameter then
// we wanted to add +1 to the parameter and return it . 
//then we called the funcion and console log the varible x . so they console log gave us the value of the varible x which was 9  with out taking any thing from the function .


// in the seecond example we made an object then a funcion with a parameter , and we wanted to add +1 to the key in the object and return it . 
//then we called the function and console log the object y , the result was with adding one to the x which was a key in the object y.  

