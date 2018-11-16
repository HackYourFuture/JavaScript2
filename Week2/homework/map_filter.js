'use strict';

// Example implementation of map, filter, forEach
// See also: https://github.com/HackYourFuture/fundamentals/blob/master/fundamentals/map_filter.md

const numbers = [1, 2, 3, 4];

function map(arr, mapFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    const mappedValue = mapFn(elem, i, arr);
    result.push(mappedValue);
  }
  return result;
}

console.log('\n.map()');
console.log(map(numbers, x => x * x));
console.log(numbers.map(x => x * x));

function filter(arr, predicateFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (predicateFn(elem, i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log('\n.filter()');
console.log(filter(numbers, x => x % 2 === 0));
console.log(numbers.filter(x => x % 2 === 0));

function reduce(arr, reducerFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    accumulator = reducerFn(accumulator, elem, i, arr);
  }
  return accumulator;
}

console.log('\n.reduce()');
console.log(reduce(numbers, (acc, number) => acc + number, 0));
console.log(numbers.reduce((acc, number) => acc + number, 0));

function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    func(elem, i, arr);
  }
}

console.log('\n.forEach()');

let sum = 0;
forEach(numbers, x => sum += x);
console.log(sum);

sum = 0;
numbers.forEach(x => sum += x);
console.log(sum);
