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

const workDurationArray = maartjesTasks.map(key => key.duration);
//  console.log(workDurationArray);

const tasksMoreThanTwoHour = workDurationArray.filter(i => i >= 120);
//  console.log(tasksMoreThanTwoHours);

const computeEarnings = tasksMoreThanTwoHour.reduce((acc, cur) => acc + (cur / 60) * 20);
//  console.log(computeEarnings);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
const earning = computeEarnings.toFixed(2);
console.log(`Maartje has earned €${earning}`);

//  Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
