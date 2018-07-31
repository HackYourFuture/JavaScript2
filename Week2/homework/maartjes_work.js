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
const tasksInHours = tasks.map(function(x){
  let y = x;
  y.duration /= 60;
  y.duration = Math.round(y.duration * 100)/100;
  return y;
});

const longerTasks = tasksInHours.filter(x => x.duration >= 2);
const hourRate = 20;
const maartjesSalary = longerTasks.map(x => x.duration).reduce((a, b) => (a + b)) * hourRate;

console.log(`€ ${Math.round(maartjesSalary * 100) / 100}`);

console.log(longerTasks);
