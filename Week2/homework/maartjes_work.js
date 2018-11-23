'use strict';

const monday = [{
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

const tuesday = [{
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
console.log(tasks)

const durationsInHours = tasks.map(task => task.duration / 60);

const twoHrsOrMore = durationsInHours.filter(duration => duration >= 2);

const hourlyRate = 20;
const sallaryPerTask = twoHrsOrMore.map(duration => duration * hourlyRate);
console.log(sallaryPerTask);

const totalSallary = sallaryPerTask.reduce((accum, value) => accum + value, 0);

console.log('the total sallary is ' + Math.round(totalSallary));