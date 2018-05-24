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
console.log(tasks);

const fromMinToHours = tasks.map(tasks => tasks.duration / 60);
console.log(fromMinToHours);

const underTwoHours = tasks.filter(tasks => tasks.duration > 120);
console.log(underTwoHours);

const maartjeSalary = tasks.map((tasks) => tasks.duration * 20);
console.log(maartjeSalary);

const amount = tasks.reduce((maartjeSalary, tasks) => maartjeSalary + tasks.duration, 0);
console.log("Maartje earns a total of " + "€" + amount);


