'use strict';

const numbers = [1, 2, 3, 4];

let sum = 0;
numbers.forEach(function(number) {
  sum += number;
});

console.log(sum);

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

sum = 0;
forEach(numbers, function(number) {
  sum += number;
});

console.log(sum);
