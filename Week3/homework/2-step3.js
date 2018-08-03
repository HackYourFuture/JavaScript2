'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  
  for (let i =startIndex; i <=stopIndex; i++){
      values.push(i)
  }
  //console.log(values)
  
  for(let i = 0; i<values.length; i++){
    if (values [i] % 5 ===0 && values[i] % 3 === 0){
      sayThree(values [i])
      sayFive(values [i])

      }else if (values[i] % 3 === 0){ sayThree(values[i])

      }else if(values [i] % 5 ===0){ sayFive(values [i])

      }
    
  }
  
}
let sayThree= (x) => console.log(x + " can be divided by three")

let sayFive= (x) => console.log( x + " can be divided by five")


threeFive(10, 15);
