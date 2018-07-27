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
//2.2.1
const tasksDuration = tasks.map((x) => x.duration / 60);
//2.2.2
const tasksDurationAbove2 = tasksDuration.filter((x) => x >= 2);
//2.2.3
function getSum(total, num) { return total + num; }
const summing = tasksDurationAbove2.reduce(getSum);
//2.2.4
const salary = Math.round(summing * 20);
alert(`Solution1 : Maartje's final salary is €${salary}`);

//In a different and short coding
const salary2 = tasks
  .map(x => x.duration / 60)
  .filter(x => x >= 2)
  .map(x => x * 20)
  .reduce((total, num) => total + num);
alert("Solution 2 with another code : € " + salary2.toFixed(0));