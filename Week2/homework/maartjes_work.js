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

//step 1. duration in hour
const hours = tasks.map(hour => {
  return hour.duration/60;
});

//step 2. durations less than 2 hours
const moreThan2Hours = hours.filter(x => {
  return x >= 2;
});

//step 3 total salary
const salary = moreThan2Hours.map(earn => earn * 17)
.reduce((accumulator, currentValue) => accumulator + currentValue);

//step 4 rounded salary
console.log(`€${salary.toFixed(0)}`);
 


