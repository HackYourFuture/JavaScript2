'use strict';

function doubleOddNumbers(numbers) {
  const newNumbers = myNumbers.filter(myNumbers => myNumbers % 2 !==0 );
  
  
   const doublenewNumbers = newNumbers.map(newNumbers => newNumbers * 2)
   return doublenewNumbers;
}  
  

const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line

module.exports = {
  myNumbers,
  doubleOddNumbers
};
