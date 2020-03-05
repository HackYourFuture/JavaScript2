arrayGenerator =function (startIndex, stopIndex,byThree,byFive) {
  let y= Array(stopIndex- startIndex + 1).fill().map((_, idx) => startIndex + idx)


  
const arrSum = arr => arr.reduce((a,b) => a + b, 0)
let b = arrSum(y)
byFifteen=function(){
    alert("the sum of the enterd array is devideble by 3&5")
}
byThree=function(){
    alert("the sum of the enterd array is devideble by 3")
}
byFive=function(){
    alert("the sum of the enterd array is devideble by 5")
}

if(b%15===0){return byFifteen() }
else if(b%5===0){return byFive()}
else if(b%3===0){return byThree()}
}
