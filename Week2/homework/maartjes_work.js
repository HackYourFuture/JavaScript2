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
const hourRate = 20;

const total = tasks
  .map(convert => convert.duration / 60)
  .filter(duration => duration >= 2)
  .reduce((total, hour) => total + hour * hourRate, 0);

console.log("She earned: € " + total.toFixed(2));

// Another version
let total2 = 0;
tasks
  .map(task => task.duration / 60)
  .filter(duration => duration >= 2)
  .map(duration => duration * hourRate)
  .forEach(amount => total2 += amount);

console.log(`Maartje has earned €${total2.toFixed(2)}`);
