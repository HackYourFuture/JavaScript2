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
// Map the tasks to durations in hours.
const hours = tasks.map(function(taskHour){
  return taskHour.duration / 60;
})
console.log(hours);//[ 3,2,0.33,3.33,4,3,0.16,3.33,0.66 ]

// Filter out everything that took less than two hours
const earningHours = hours.filter(function(earningHour){
return earningHour >= 2;
})
console.log(earningHours);//[ 3, 2, 3.33, 4, 3, 3.33 ]

// Multiply the duration per-hour rate and sum it all up.
const totalEarning = earningHours.map(hours => hours * 9)
.reduce((money, payment) => money + payment);
