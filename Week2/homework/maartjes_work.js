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

const taskDurationsToHours = tasks.map(convert => {
  return {
    name: convert.name,
    duration: convert.duration / 60
  }
});

console.log(taskDurationsToHours);

const moreThenTwoHours = taskDurationsToHours.filter(compare => {
  return (compare.duration >= 2) ? true : false
});
console.log(moreThenTwoHours);


const hourRate = 12;
const perHour = taskDurationsToHours.reduce((total, hour) => total + hour.duration * hourRate, 0);

console.log("€", perHour);

// Here is the solution with forEach()
let MaartjeBill = 0;
const MaartjeTakePerHour = 12;
taskDurationsToHours.forEach(bill => MaartjeBill += MaartjeTakePerHour * bill.duration)

console.log("€", MaartjeBill);