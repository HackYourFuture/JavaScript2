'use strict'


function createBase(x) {
     
     return function a(n){
         return n + x             // Put here your logic...
  }
}  
  const addSix = createBase(6);
  
  
  // Put here your function calls...
  console.log(addSix(9));
  console.log(addSix(18));
  console.log(addSix(30));