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

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  const xyz = maartjesTasks.map(time => time.duration / 60).filter(time => time > 2);
  const qqq = xyz.map(time => time * 20);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const sum = qqq.reduce(reducer);
  return sum;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

const roundedSum = earnings.toFixed(2);
console.log(roundedSum);

console.log(`Maartje has earned €${roundedSum}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
