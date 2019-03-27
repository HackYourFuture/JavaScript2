'use strict';
/* cSpell:disable */

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

let maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  tasks = tasks.map(durations => durations.duration / 60);
  tasks = tasks.filter(durations => durations >= 2);
  tasks = tasks.map(durations => durations * hourlyRate);
  tasks = tasks.reduce((x, y) => x + y);
  tasks = Math.floor(tasks * 100) / 100.0;
  return tasks;
}
// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
const earn = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(earnings);
console.log(`Maartje has earned ${earn}`);
// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
