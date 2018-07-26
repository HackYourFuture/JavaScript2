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

const tasks = monday.concat(tuesday);

// Add your code here
console.log(tasks);
const tasksHours = tasks.map(task => {
  let temp = (task.duration / 60).toFixed(2);
  return Number(temp);
});
console.log('Time in hour', tasksHours);
const validDurations = tasksHours.filter(taskHour => taskHour >= 2);
console.log('Elements who larger than 2 hours', validDurations);
const totalHours = validDurations.reduce((currentNum, duration) => currentNum + duration);
const earnedMoney = '€ ' + totalHours * 20;
console.log('The total amount of earned money is :', earnedMoney + ' ,(Note : € 20 per hour!)');