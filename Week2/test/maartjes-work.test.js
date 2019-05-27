'use strict';

// const { maartjesTasks, maartjesHourlyRate, computeEarnings } = require(`../homework/maartjes-work`);

// describe('maartjes_work', () => {
//   test('earnings rounded to euro cents', () => {
//     const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
//     const result = earnings.toFixed(2);
//     expect(result).toBe('373.33');
//   });
// });

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

const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  return tasks
    .map(item => item.duration / 60)
    .filter(item => item >= 2)
    .reduce((total, item) => total + item * hourlyRate, 0);
}
function totalEarning(arr) {
  return computeEarnings(arr, maartjesHourlyRate) + computeEarnings(arr, maartjesHourlyRate);
}
const earnings = totalEarning(monday, tuesday); // computeEarnings(monday, maartjesHourlyRate) + computeEarnings(tuesday, maartjesHourlyRate);

const roundedEarnings = earnings.toFixed(2);
console.log(` Maartje has earned €${roundedEarnings}`);
