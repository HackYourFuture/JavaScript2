'use strict';
let range = function (startIndex ,stopIndex) {
  const values = [];
  let i = startIndex;
  while(i <= stopIndex){
    values.push(i);
    i++;
  }
  return values;

}
function sayThree(){
  return "sayThree";
}

function sayFive(){
  return "sayFive";
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {

let newValues = range (startIndex,stopIndex);
let result = [];
for (let i = 0; i < newValues.length; i++){
  if (newValues[i] % 5 === 0 && newValues[i] % 3 === 0){
       result.push(threeCallback())
       result.push(fiveCallback())
  }else if(newValues[i] % 3 === 0){
    result.push(threeCallback())

  }else if(newValues[i] % 5 === 0){
    result.push(fiveCallback())

  }
  
}
return result;
}

console.log(threeFive(10, 15, sayThree, sayFive).join(", "));

