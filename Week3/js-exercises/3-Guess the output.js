'use strict'

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);                // alert will give a message for variable not defined not for pre-defined before, it's not working as return in function  
  };
})();

console.log(x());  