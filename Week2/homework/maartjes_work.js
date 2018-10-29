'use strict';

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
//console.log(tasks);


// Add your code here
// change from mins to hour, then filter out all values less than 2.
const setFilteredHours = tasks.map(i => i.duration / 60).filter(i => i >= 2)
//console.log(setFilteredHours);


// totalPayment = (map) an hour * 30 => returns [ 90, 60, 100, 120, 90, 100. 
// Then(reduce) the sum of all values is 560 euros
let payPerHour = 50;
const totalPayment = setFilteredHours.map(i => i * payPerHour).reduce((total, value) => total + value)
console.log("the total amount of money is: " + "€" + totalPayment.toFixed(2));

//toFixed(x): set the number of ints after the coma in case of floats