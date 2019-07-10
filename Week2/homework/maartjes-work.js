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
  const makeDurationHours = tasks.map(elem => elem.duration / 60);
  const TwoHoursOrBigger = makeDurationHours.filter(elem => elem >= 2);
  let sum = 0;
  for (let i = 0; i < TwoHoursOrBigger.length; i++) {
    sum += TwoHoursOrBigger[i] * hourlyRate;
  }
  return sum;
}
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

const earningsRounded = Math.round(earnings * 100) / 100;

console.log(`Maartje has earned €${'roundedEarnings'} ` + earningsRounded);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
