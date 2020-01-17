"use strict";

function removeDuplicates(){
    const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
    const withoutRepetition = [].concat(new Set(letters));
    return withoutRepetition;
}
console.log(removeDuplicates()); 

// or with filter 

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates1(letters) {
    return letters.filter(function (v, i) {
        return letters.indexOf(v) === i;    
    });
};
console.log(removeDuplicates1(letters)); 


