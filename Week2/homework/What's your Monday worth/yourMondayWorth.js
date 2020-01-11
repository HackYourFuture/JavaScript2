'use strict';
const mondayTasks = [
	{
		name: 'Daily standup',
		duration: 30 // specified in minutes
	},
	{
		name: 'Feature discussion',
		duration: 120
	},
	{
		name: 'Development time',
		duration: 240
	},
	{
		name: 'Talk to different members from the product team',
		duration: 60
	}
];

const durationTime = mondayTasks.map((total) => total.duration / 60).reduce((a, b) => {
	return a + b * 25;
}, 0);

console.log(`€${durationTime}`);
