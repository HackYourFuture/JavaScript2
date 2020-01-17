"use strict";

function createBase(a) {
    return (b)=>{
  			return a+b
  	}
  }
  
   const addSix = createBase(6);
   

       // Put here your function calls...
   console.log(addSix(9));
   console.log(addSix(18)); 
   console.log(addSix(29));   

//     // this is another way
    
//   const addSix = (a)=>{
//     return (b)=>{
//       return (c)=>{
//         return a+b+c
//       }
//     }
//   }
  
//   console.log(addSix (5)(5)(5)) // 15
//   console.log(addSix (8)(8)(8)) //24
//   console.log(addSix (12)(12)(12)) //36


  