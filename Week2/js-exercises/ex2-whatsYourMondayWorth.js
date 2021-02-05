/**
 
 ** Exercise 2: What 's your Monday worth? **
 
 Write a function that finds out what your hourly rate on a Monday would be
 Use the map array function to take out the duration time for each task.
 Avoid using for loop or forEach.
 Multiply each duration by a per - hour rate for billing and sum it all up.
 Output a formatted Euro amount, rounded to Euro cents, e.g: €11.34.
 Make sure the function can be used on any array of objects that contain a duration property with a number value

 */

'use strict';

// one way of accomplishing the result, and I like this way, less code
function dayWorth(tasks, hourlyRate) {
  const reduced = tasks.reduce((total, task) => total + task.duration, 0);
  return ((reduced / 60) * hourlyRate).toFixed(2);
}

// // another way of accomplishing the same result, but strictly following all the requirements (using 'map' in particular)
// function dayWorth(array, hourlyRate) {
//   const newArray = array
//     .map(time => (time.duration / 60) * hourlyRate)
//     .reduce((total, element) => total + element, 0);
//   return newArray.toFixed(2);
// }

const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

console.log(dayWorth(mondayTasks, 25));
console.log(dayWorth(mondayTasks, 13.37));
