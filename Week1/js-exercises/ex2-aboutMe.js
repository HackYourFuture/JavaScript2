/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

'use strict';
const title = document.querySelector('h1');
document.body.style.fontFamily = 'Arial, sans-serif';

const name = document.getElementById('nickname');
const favouriteFood = document.getElementById('fav-food');
const hometown = document.getElementById('hometown');

name.innerText = 'Vaida';
favouriteFood.innerText = 'Cheese';
hometown.innerText = 'Svencionys';

const list = document.getElementsByTagName('li');
for (let i = 0; i < list.length; i++) {
  list[i].classList.add('list-item');
}
const div = document.createElement('div');
const picture = document.createElement('img');
picture.src = './picture/vaida.jpg';
picture.style.height = '250px';
title.appendChild(div);
div.appendChild(picture);

//created a div so img would be under the h1, not next to it
