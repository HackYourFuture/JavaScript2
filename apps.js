// 'use strict';

const books = [
  'educated_a_memoir',
  'washington_black_a_novel',
  'indianapolis',
  'elevation',
  'the_line_becomes_a_river',
  'the_woman_in_the_window',
  'once_upon_a_river',
  'children_of_blood_and_bone',
  'virgil_wander',
  'there_there',
];

const bookObj = {
  educated_a_memoir: {
    title: 'Educated: A Memoir',
    author: 'Tara Westover',
    language: 'English',
  },
  washington_black_a_novel: {
    title: 'Washington Black: A Novel',
    author: 'Esi Edugyan',
    language: 'English',
  },
  indianapolis: {
    title: 'Indianapolis',
    author: 'Lynn Vincent',
    language: 'English',
  },
  elevation: {
    title: 'Elevation',
    author: 'Stephen King',
    language: 'English',
  },
  the_line_becomes_a_river: {
    title: 'The Line Becomes a River',
    author: 'Francisco Cantu',
    language: 'English',
  },
  the_woman_in_the_window: {
    title: 'The Woman In The Window',
    author: 'A.J. Finn',
    language: 'English',
  },
  once_upon_a_river: {
    title: 'Once Upon a River',
    author: 'Diane Setterfield',
    language: 'English',
  },
  children_of_blood_and_bone: {
    title: 'Children of Blood and Bone',
    author: 'Tomi Adeyemi',
    language: 'English',
  },
  virgil_wander: {
    title: 'Virgil Wander',
    author: 'Leif Enger',
    language: 'English',
  },
  there_there: {
    title: 'There There',
    author: 'Tommy Orange',
    language: 'English',
  },
};

const bookCovers = {
  educated_a_memoir:
    'https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL._AC_SR201,266_.jpg',
  washington_black_a_novel:
    'https://images-na.ssl-images-amazon.com/images/I/81XVvJeD83L._AC_SR201,266_.jpg',
  indianapolis: 'https://images-na.ssl-images-amazon.com/images/I/81EOTq-nUaL._AC_SR201,266_.jpg',
  elevation: 'https://images-na.ssl-images-amazon.com/images/I/71tXuzNDDmL._AC_SR201,266_.jpg',
  the_line_becomes_a_river:
    'https://images-na.ssl-images-amazon.com/images/I/81SNfjMBWJL._AC_SR201,266_.jpg',
  the_woman_in_the_window:
    'https://images-na.ssl-images-amazon.com/images/I/91wr7Rq7ZaL._AC_SR201,266_.jpg',
  once_upon_a_river:
    'https://images-na.ssl-images-amazon.com/images/I/81l5GH15D%2BL._AC_SR201,266_.jpg',
  children_of_blood_and_bone:
    'https://images-na.ssl-images-amazon.com/images/I/A1agLFsWkOL._AC_SR201,266_.jpg',
  virgil_wander: 'https://images-na.ssl-images-amazon.com/images/I/91mHEJDPV-L._AC_SR201,266_.jpg',
  there_there: 'https://images-na.ssl-images-amazon.com/images/I/81FHAZWBpeL._AC_SR201,266_.jpg',
};

const root = document.querySelector('body');
const bookList = document.createElement('ul');
const header = document.createElement('h1');
header.innerHTML = 'The Best Books of 2018 by Amazon';
root.appendChild(bookList);
bookList.appendChild(header);

for (let i = 0; i < books.length; i++) {
  const listItem = document.createElement('li');
  const cover = document.createElement('img');
  const title = document.createElement('h2');
  const author = document.createElement('h3');
  const language = document.createElement('h4');

  cover.setAttribute('src', bookCovers[books[i]]);
  title.innerHTML = bookObj[books[i]].title;
  author.innerHTML = bookObj[books[i]].author;
  language.innerHTML = bookObj[books[i]].language;
  listItem.style.border = '2px solid #950740';

  bookList.appendChild(listItem);
  listItem.appendChild(cover);
  listItem.appendChild(title);
  listItem.appendChild(author);
  listItem.appendChild(language);
}
