'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  let values = [];
  
  for (startIndex ; startIndex<=stopIndex ; startIndex++){
    values = startIndex;
       if(values % 3 === 0 ){ 
              threeCallback( values) ;
      } if (values % 5 === 0 ){
          fiveCallback( values) ;       
      }if( values % 3 === 0 && values % 5 === 0  ){
                    //threeCallback(values) + fiveCallback(values) ;
                    console.log(' is divisible by 5 and 3 .'); 
      }else{
            console.log(values + " is  NOT divisible by 5 and 3 .");
          }
    
     }
     }
 function sayThree(values){
   console.log(values +" "+"  is divisible by 3 .");
 }

 function sayFive(values){
   console.log(values +" "+ "  is divisible by 5 .");
 }

threeFive(10, 15, sayThree, sayFive);
