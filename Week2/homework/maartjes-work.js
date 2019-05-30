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
  const hourBiggerThenTow = [];
  let totalSalary = 0;
  const totalHourWork = tasks.map(min => min.duration / 60);
  for (const i in totalHourWork) {
    if (totalHourWork[i] >= 2) {
      totalSalary += totalHourWork[i] * hourlyRate;
      hourBiggerThenTow.push(totalHourWork[i]);
    }
  }

  // eslint-disable-next-line prefer-const
  let currencyString = totalSalary.toFixed(2);
  console.log(currencyString);
  console.log(hourBiggerThenTow);

  return totalSalary;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${earnings}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
