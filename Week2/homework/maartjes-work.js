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
/* cSpell:disable */
const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  tasks = tasks
    .map(durations => durations.duration / 60)
    .filter(durations => durations >= 2)
    .map(durations => durations * hourlyRate)
    .reduce((taskEarnings, taskEarning) => taskEarnings + taskEarning);
  return tasks;
}
// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
// earnings.toFixed(2);
const formattedEarnings = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
}).format(earnings);
console.log(`Maartje has earned ${formattedEarnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
