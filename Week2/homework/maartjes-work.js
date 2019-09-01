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
  let result = tasks.map(toHours => toHours.duration / 60);
  console.log(result); // [3, 2, 0.33, 3.35, 4, 3, 0.16, 3.35, 0.66]
  result = result.filter(twoHoursOrMore => twoHoursOrMore >= 2);
  console.log(result); // [3, 2, 3.35, 4, 3, 3.35]
  result = result.reduce((sum, twoHoursOrMore) => sum + twoHoursOrMore * hourlyRate, 0);
  return result;
}

/* or it could be solved with chaining method as following
function computeEarnings(tasks, hourlyRate) {
  const result = tasks
    .map(toHours => toHours.duration / 60)
    .filter(twoHoursOrMore => twoHoursOrMore >= 2)
    .reduce((sum, twoHoursOrMore) => sum + twoHoursOrMore * hourlyRate, 0);
  console.log(result);
}
 (but now i prefer the previous method because it allow me to log each stage and help me to more understand). */

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);
console.log(typeof earnings); // (note for me) in the function computeEarnings i used console log instead of return so when i tried to apply the toFixed method i got NaN and to know what happened i used (typeof earnings) then the result was undefined but when i used return the result was number.

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${earnings.toFixed(2)}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
