'use strict';

const hackYourFutureMembers = [
	{ name: 'Wouter', age: 33 },
	{ name: 'Federico', age: 32 },
	{ name: 'Noer', age: 27 },
	{ name: 'Tjebbe', age: 22 }
];

const combinedAge = hackYourFutureMembers.map((totalAges) => totalAges.age).reduce((a, b) => {
	return a + b;
}, 0);

console.log(`The collective age of the HYF team is: ${combinedAge}`);
