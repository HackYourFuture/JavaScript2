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
// console.log(tasks);


// Add your code here

const perHour = 20;
const totalEarned = tasks.filter(twoHoursOrMore => twoHoursOrMore.duration >= 120).reduce((total, task) =>
  total + (task.duration / 60 * perHour), 0);

// way 2, here I started with map.
// const perHour = 20;
// const totalEarned = tasks.map(toHours => toHours.duration / 60).filter(twoHoursOrMore => twoHoursOrMore >= 2)
//   .reduce((total, task) => total + (task * perHour), 0);

console.log('Maartje should receive for the performed tasks' + ' ' + '€ ' + totalEarned.toFixed(2));
