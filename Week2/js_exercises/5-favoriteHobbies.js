const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

// Write a program that outputs each of these inside an HTML file
// Create an HTML and JavaScript file, link them together
// Use the`map` and / or`forEach` function to put each hobby into a list item
// Output the list items in an unordered list

const div1 = document.getElementById('div1');
const h1 = document.createElement('h1');
h1.textContent = 'My Favour Hobbies';
const myFavourHobbies = document.createElement('ul');

div1.appendChild(h1);
div1.appendChild(myFavourHobbies);

myHobbies.forEach(hobby => {
  const line = document.createElement('li');
  line.textContent = hobby;
  line.style.textDecoration = "underline";
  line.style.color = "blue";
  myFavourHobbies.appendChild(line);
});
