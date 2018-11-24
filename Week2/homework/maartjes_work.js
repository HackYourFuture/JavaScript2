'use strict';

const monday = [{
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

const tuesday = [{
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




const allTasks = tasks.reduce((total, task) => total + task.duration / 60, 0);
console.log(allTasks);


const lessThanTwoHours = tasks.filter(more => more.duration > 120);
console.log(lessThanTwoHours);

const theCost = tasks.map(function(cost) {
    return cost.duration / 60 * 30;
});
console.log(theCost);


const allCost = tasks.reduce((total, task) => total + task.duration / 60 * 30, 0);
console.log(allCost);