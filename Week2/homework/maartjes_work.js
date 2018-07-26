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
let twoHoursTasks = tasks.filter(x => x.duration >=120);
//console.log(twoHoursTasks);

let totalWorkingTime = twoHoursTasks.map(x => x.duration);
//console.log(totalWorkingTime);

const salaryPerHour = 25.5;

let totalSalary = totalWorkingTime.reduce((acc,val) => (acc + val)/60 * salaryPerHour,0)
console.log( "The salary of Maartje is "+"€ " +totalSalary.toFixed(2))