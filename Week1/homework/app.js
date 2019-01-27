/* global console */

'use strict';

const books = {
  'the_davinci_code': {
    title: 'The Davinci Code',
    author: 'Dan Brown',
    language: 'English',
    picture: 'the_davinci_code.jpg'
  },
  'the_kite_runner': {
    title: 'The Kite Runner',
    author: 'Khaled Hosseini',
    language: 'English',
    picture: 'the_kite_runner.jpg'
  },
  'the_bamboo_stalk': {
    title: 'The Bamboo Stalk',
    author: 'Saud Alsanousi',
    language: 'English',
    picture: 'the_bamboo_stalk.jpg'
  },
  'do_not_tell_mommy': {
    title: "Don't Tell Mommy",
    author: 'Toni Maguire',
    language: 'English',
    picture: 'do_not_tell_mommy.jpg'
  },
  'inferno': {
    title: "Don't Tell Mommy",
    author: 'Dan Brown',
    language: 'English',
    picture: 'inferno.jpg'
  },
  'angels_and_demons': {
    title: 'Angels And Demons',
    author: 'Dan Brown',
    language: 'English',
    picture: 'angels_and_demons.jpg'
  },
  'les_miserables': {
    title: 'Les miserables',
    author: 'Victor Hugo',
    language: 'English',
    picture: 'les_miserables.jpg'
  },
  'crime_and_punishment': {
    title: 'Crime And Punishment',
    author: 'Fyodor Dostoevsky',
    language: 'English',
    picture: 'crime_and_punishment.jpg'
  },
  'blindness': {
    title: 'Blindness',
    author: 'José Saramago',
    language: 'English',
    picture: 'Blindness.jpg'
  },
  'the_monk_who_sold_his_ferrari': {
    title: 'The monk who sold his ferrari',
    author: 'Robin Sharma',
    language: 'English',
    picture: 'the_monk_who_sold_his_ferrari.jpg'
  },
}
const myOl = document.createElement('ol');
document.getElementById('myList').appendChild(myOl);
const arryOfBooks = Object.keys(books)
for (const key of Object.keys(books)) {
  const myNewLi = document.createElement('li');
  myOl.appendChild(myNewLi);
  myNewLi.setAttribute('id', key);
}
for (const key of arryOfBooks) {
  const listItem = document.getElementById(key);
  console.log(listItem)
  const myH = document.createElement('h2');
  const myOtherH = document.createElement('h3');
  const myp = document.createElement('p');
  const myImg = document.createElement('img');
  listItem.appendChild(myH);
  listItem.appendChild(myOtherH);
  listItem.appendChild(myp);
  listItem.appendChild(myImg);
  myH.textContent = books[key].title;
  myOtherH.textContent = 'By : ' + books[key].author;
  myp.textContent = 'the language : ' + books[key].language;
  myImg.setAttribute('src', 'img/' + books[key].picture);
  myImg.setAttribute('alt', 'Here is the picture');
}
