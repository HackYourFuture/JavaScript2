'use strict';



const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];


 let uniqueValues = function(array) {
        let uniquearray =[]
        for (let i =0; i < array.length; i++)
        {
            if (uniquearray.indexOf(array[i]) === -1 && array[i] !== ''){
            uniquearray.push(array[i]);
            }
        }
 return uniquearray;
}
console.log(uniqueValues(values));