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
//console.log(tasks);
let tasksHours = tasks.map((task)  => task.duration/60);
//console.log(tasksHours);
let tasksHoursfiltered = tasksHours.filter((taskhour) => taskhour >= 2 );
//console.log(tasksHoursfiltered);
let tasksPrice =tasksHoursfiltered.map((taskfiltered)  => taskfiltered*10);
//console.log(tasksPrice);
let salary = tasksPrice.reduce((x, taskPrice) => x + taskPrice, 0);
//console.log(salary);
let totalSalary = salary.toFixed(2);
console.log('According to 10 Euro per hour the total salary for Maartje is € ' +totalSalary);
