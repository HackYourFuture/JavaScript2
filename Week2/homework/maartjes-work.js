'use strict';
//1.1 Say you would like to write a program that doubles the odd numbers in an array and throws away the even numbers.

//Your solution could be something like this:

// function doubleOddNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// const myNumbers = [1, 2, 3, 4];
// console.log(doubleOddNumbers(myNumbers)); // ==> [2, 6]
//Rewrite the above doubleOddNumbers function using map and filter; don't forget to use =>.

const doubleOddNumbers = [1, 2, 3, 4];
const OddNumbers = doubleOddNumbers.filter(oddNumber => oddNumber % 2 !== 0);
console.log(OddNumbers);
const OddNumbers2 = doubleOddNumbers.map(oddNumber => oddNumber * 2);
console.log(OddNumbers2);

//1.2 Underneath you see a very interesting small insight in Maartje's work:

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const durations = monday.duration.concat(tuesday.duration);
console.log(durations);

//Map the tasks to durations in hours.

const hours = durations.map(function(duration) {
  return duration / 60;
});
console.log(hours);
//Underneath, I'm using arrow function.
//const hours = durations.map(
// duration => duration / 60;
//);
//console.log(hours);
//Filter out everything that took less than two hours (i.e., remove from the collection)
const twoHours = durations.filter(function(duration) {
  return duration < 120;
});
console.log(twoHours);

//Multiply the each duration by a per-hour rate for billing (use €20/hour) and sum it all up.
function multiply(durations) {
  return 'per-hour rate: €' + (durations / 60) * 20;
}
//Underneath, I'm using arrow function.
//const multiply = durations.forEach(duration => {
// return 'per-hour rate: €' + (duration / 60) * 20;
//});

//Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.

//not done yet
