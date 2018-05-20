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
const salaryPerHour = 10;

const maartjesEarnings = tasks
  .map((tasks) => tasks.duration / 60)
  .filter((paidHours) => paidHours >= 2)
  .reduce((totalEarnings, paidHour) => totalEarnings + paidHour * salaryPerHour, 0);

console.log('Maartje has earned €' + Math.round(maartjesEarnings, 2) + ' by completing her tasks.');
