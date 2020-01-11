'use strict';

const myHobbies = [ 'Meditation', 'Reading', 'Programming', 'Hanging out with friends', 'Going to the gym' ];

const h2 = document.createElement('h2');
h2.innerText = 'My hobbies';
document.getElementById('myList').appendChild(h2);

const ul = document.createElement('ul');
document.getElementById('myList').appendChild(ul);

myHobbies.forEach(function(name) {
	const li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML += name;
});
