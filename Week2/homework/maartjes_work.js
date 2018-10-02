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

// Add your code here
const workHours = tasks.map(workHour => workHour['duration'] / 60);
const workHoursMoreThan2 = workHours.filter(workHoursMoreT2 => workHoursMoreT2 > 2);
let sum;
function add(sum, elem) {
  return sum + elem;
}
let totalIncome = workHoursMoreThan2.map(hour => hour * 10).reduce(add, 0);
console.log(totalIncome.toFixed(2));