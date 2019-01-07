'use strict';

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

const tasks = monday.concat(tuesday);

// Add your code here

const durationInHours = tasks.map(minute => minute.duration / 60);

const moreThan2Hours = durationInHours.filter(newArray => newArray >= 2);

// He earns €15.5 for one hour.

const wageForOneHour = 15.5;

const wageForTotalHours = moreThan2Hours.map(wage => wage * wageForOneHour);

const totalWage = Number(wageForTotalHours.reduce((total, num) => total + num).toFixed(2));

console.log('Total wage that Maartjes earn: ' + totalWage);
