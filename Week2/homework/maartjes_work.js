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
/*
function computeAmountEarned(arrayOfTasksAndDurations, wagePerHour) {

  const amountEarned = arrayOfTasksAndDurations
    .map(task => task.duration / 60)
    .filter(taskDuration => taskDuration >= 2)
    .reduce((sum, payableDurations) => sum + payableDurations * wagePerHour, 0)
    .toFixed(2);
  return amountEarned;
}
*/
const computeAmountEarned = (tasksAndDurations, wagePerHour) => (tasksAndDurations
  .map(task => task.duration / 60)
  .filter(taskDuration => taskDuration >= 2)
  .reduce((sum, payableDurations) => sum + payableDurations * wagePerHour, 0)
  .toFixed(2));

console.log('Maartje has earned: €' + computeAmountEarned(tasks, 23));

