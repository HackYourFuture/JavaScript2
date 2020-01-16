'use strict'

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
       for (let i = startIndex ; i <= stopIndex; i++){
            numbers.push(i);
           }
           
       console.log(numbers);
      threeCallback(numbers);
      fiveCallback(numbers);

}

function sayThree(newArray){
let  numberThree = newArray.filter(num => num % 3 === 0)
  console.log(` ${numberThree} are divisible by 3 `)
}   

function sayFive(newArray){
let  numberFive = newArray.filter(num => num % 5 === 0)
 console.log(` ${numberFive} are divisible by 5 `)
}   
        
threeFive(10,15,sayThree, sayFive)
    
