'use strict'

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
 

function removeDuplicates(x){

    const newLetters = x.filter((item,index)=> x.indexOf(item)== index);
    
   return newLetters
}


console.log(removeDuplicates(letters))


//easy way without fun() 

// let letter = new Set([...letters]);
// let newLetters = [... letter];
// console.log(newLetters)
