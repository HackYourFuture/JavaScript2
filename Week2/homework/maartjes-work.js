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
  // Replace this comment and the next line with your code
  const maartjesTasks = tasks.map(tasks => tasks.duration / 60)
  const filteredTasks = maartjesTasks.filter(taskHour => taskHour >= 2)
  const totalEarnings = filteredTasks.reduce((earnings, taskHour) => earnings + taskHour * hourlyRate, 0);
  return totalEarnings;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)
//console.log(`Maartje has earned €${'replace this string with the earnings rounded to euro cents'}`);
console.log(`Maartje has earned €${earnings.toFixed(2)}`);


// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRa1te,
  computeEarnings,
};
