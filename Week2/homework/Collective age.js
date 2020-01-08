'use strict';

const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];
function calcCollectiveAges(Arr, callback) {
  const allAges = Arr.map(element => element.age);
  return callback(allAges)
}

function sumsNumbersInArr(Arr) {
  return Arr.reduce((a, b) => a + b)
}

// Something extra I wanted to experiment with
function calcAveragOfArr(Arr) {
  const sum = sumsNumbersInArr(Arr);
  return sum / Arr.length;
}
console.log(calcCollectiveAges(hackYourFutureMembers, sumsNumbersInArr));
console.log(calcCollectiveAges(hackYourFutureMembers, calcAveragOfArr));

