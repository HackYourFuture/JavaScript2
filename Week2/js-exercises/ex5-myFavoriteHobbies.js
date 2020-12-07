/**
 
 ** Exercise 5: My favorite hobbies **
 
 Write a program that outputs each of these inside an HTML file
 Create an HTML and JavaScript file, link them together
 Use the map and / or forEach function to put each hobby into a list item
 Put the list items in an unordered list
 */

'use strict';

function createHTMLList(arr) {
  const unorderedList = document.createElement('ul');
  arr.forEach(item => {
    const listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    listItem.innerText = item;
  });
  return unorderedList;
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

const hobbies = createHTMLList(myHobbies);

const container = document.getElementById('container');

container.appendChild(hobbies);
