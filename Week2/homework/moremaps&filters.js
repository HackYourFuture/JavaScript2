"use strict";
//2.1 Rewrite the below program using map and filter don't forget to use =>.
/* const numbers = [1, 2, 3, 4];

const newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers.push(numbers[i] * 2);
  }
}

console.log('The doubled numbers are', newNumbers); // ==> [2, 6]
*/

const numbers = [1, 2, 3, 4];

//Filters out even numbers. 

let newNumbers = numbers.filter((number) => number % 2 !== 0);

//Times outcome by 2. 

newNumbers = newNumbers.map((number) => number * 2);

//Logs new array. 

console.log(newNumbers);

//2.2

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const tasks = monday.concat(tuesday);

// Converts minutes into hours. 

let hours = tasks.map((item) => item.duration / 60);

// Filters out hours below 2. 

hours = hours.filter((item) => item >= 2);

// Rounds hours to nearest number with 2 digit decimal and times by twenty (for a 20:- per hour wage).

hours = hours.map((item) => Math.round(item * 100) / 100 * 20);

// Creates total of rounded hours. 

let durationTotal = hours.reduce((sum, amount) => sum + amount);

// Rounds total to nearest number with 2 digit and adds currency. 

console.log(Math.round(durationTotal * 100) / 100 + ':-');

