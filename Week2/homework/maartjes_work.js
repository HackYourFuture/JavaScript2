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

const tasksInHours = tasks.map(newTasks => {
    const newDuration = newTasks.duration / 60;
    return {
        name: newTasks.name, duration: newDuration
    }
});

console.log(tasksInHours);

const tasksTakesMoreThanTwoHours = tasksInHours.filter(twoHoursTasks => {
    return twoHoursTasks.duration >= 2
});
console.log(tasksTakesMoreThanTwoHours);

let hourRate = 18;
let taskRate = tasksInHours.reduce((rate, hour) => rate + (hour.duration * hourRate), 0);
console.log("Maartje should earn : € " + taskRate);

