'use strict';

const numbers = [1, 2, 3, 4];

var oddNumbers = numbers.filter(function(oddNumber){
    return oddNumber%2==1
})
//console.log(oddNumbers);
var doubledNumbers = oddNumbers.map((doubledNumber) => doubledNumber*2 )
console.log('The doubled numbers are: ' + doubledNumbers);