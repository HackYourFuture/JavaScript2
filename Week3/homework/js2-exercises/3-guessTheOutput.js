"use strict";

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

console.log(x()); 

// the result would be "alert  a = 12" Because we've changed the value of a to 12 inside the function.
console.log(a) 
// If we console "a" the result would be "10" Because "a"  a global variable and  what happens in the function is scope.
