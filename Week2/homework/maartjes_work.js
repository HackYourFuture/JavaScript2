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

const timeInHours = tasks.map((minutes) => minutes.duration / 60);

const maartjeWorkTime = timeInHours.filter((duration) => duration >= 2);
const rate = 15;
const maartjeEarnPerHour = maartjeWorkTime.map((duration) => duration * rate);
const totalEarn = maartjeEarnPerHour.reduce((acc, current) => acc + current);
console.log('€' + totalEarn.toFixed(2));

// Add your code here
