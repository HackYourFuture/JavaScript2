/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

function createHTMLList(arr) {
  const list0fHobbies = document.body.appendChild(document.createElement('ul'));
  console.log(list0fHobbies);
  arr.map(hobby => {
    list0fHobbies.innerHTML += `<li>${hobby}</li>`;
  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies);