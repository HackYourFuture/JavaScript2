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

//Map the tasks to durations in hours----
const minutesToHours = tasks.map(tasks => tasks.duration / 60);
console.log(minutesToHours);

//Filter out everything that took less than two hours---
const tasksOverTwoHours = tasks.filter(tasks => (tasks.duration >= 120));

//Calculate total hours worked after filtering work which is less than 2 hours---  
let totalWorkedHours = 0;

for (let i = 0; i < tasksOverTwoHours.length; i++) {
  totalWorkedHours += tasksOverTwoHours[i].duration / 60;
}

const hourlyRate = 36;

const totalEarnings = totalWorkedHours * hourlyRate;
console.log('Maartje has earned ' + '€' + totalEarnings.toFixed(2));
