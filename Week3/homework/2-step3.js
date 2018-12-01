'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const values = [];
  // Add your code here

  createArray(startIndex, stopIndex, values);
  console.log(values);
  for(let j = 0; j <= values.length; j++){
    if(values[j] % 3 == 0){ threeCallback(); }
    if(values[j] % 5 == 0){ fiveCallback(); }
  }
}

function createArray(startElement, stopElement, arr) {
  for(let i = startElement; i <= stopElement; i++){
    arr.push(i);
  }
}

function sayThree(){
  console.log('call sayThree');
}

function sayFive(){
  console.log('call sayFive');

}

threeFive(10, 15, sayThree, sayFive);
