/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  // your code goes in here
  const body = document.querySelector('body');
  const ul = document.createElement('ul');
  body.appendChild(ul);
  arr.map(hobby => {
    let li = document.createElement("li");
    li.innerHTML = hobby;
    ul.appendChild(li);
  })
  
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];