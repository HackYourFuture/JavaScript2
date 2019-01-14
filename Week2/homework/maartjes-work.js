'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180
  },
  {
    name: 'Some web development',
    duration: 120
  },
  {
    name: 'Fix homework for class10',
    duration: 20
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  }
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240
  },
  {
    name: 'Some more web development',
    duration: 180
  },
  {
    name: 'Staring out the window',
    duration: 10
  },
  {
    name: 'Talk to a lot of people',
    duration: 200
  },
  {
    name: 'Look at application assignments new students',
    duration: 40
  }
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

function computeEarnings(tasks, hourlyRate) {
  // Replace this comment and the next line with your code
  let rate = 0;
  for (const task of tasks) {
    const Total = task * hourlyRate;
    rate += Total;
  }
  return rate;
}
function computeTasksInHours(maartjesTasks, celling) {
  const marrtjeTasksInHours = maartjesTasks
    .map(task => task.duration / 60)
    .filter(task => task > celling);
  return marrtjeTasksInHours;
}

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(computeTasksInHours(maartjesTasks, 2), maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log('Maartje has earned €' + Math.round(earnings * 100) / 100 + '.');

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings
};
