'use strict';

// Question 1.1

/* const bookTitles = [
  "booknumber0",
  "booknumber1",
  "booknumber2",
  "booknumber3",
  'booknumber4',
  'booknumber5',
  'booknumber6',
  'booknumber7',
  'booknumber8',
  'booknumber9',
  ];

console.log(bookTitles);


//Question 1.3


function createUl(ul) {
  for (let i = 0; i < bookTitles.length; i++) {
    const listText = bookTitles[i];
    const listElem = document.createElement('li');
    listElem.innerText = listText;
    ul.appendChild(listElem);
  }
}

function main() {
  const root = document.getElementById('root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  createUl(ul);
}

window.addEventListener('load', main);
*/

// Question 1.4

const bookSpecified = {
  booknumber0: {
    title: 'title0',
    language: 'language0',
    author: 'author0',
  },
  booknumber1: {
    title: 'title1',
    language: 'language1',
    author: 'author1',
  },
  booknumber2: {
    title: 'title2',
    language: 'language2',
    author: 'author2',
  },
  booknumber3: {
    title: 'title3',
    language: 'language3',
    author: 'author3',
  },
  booknumber4: {
    title: 'title4',
    language: 'language4',
    author: 'author4',
  },
  booknumber5: {
    title: 'title5',
    language: 'language5',
    author: 'author5',
  },
  booknumber6: {
    title: 'title6',
    language: 'language6',
    author: 'author6',
  },
  booknumber7: {
    title: 'title7',
    language: 'language7',
    author: 'author7',
  },
  booknumber8: {
    title: 'title8',
    language: 'language8',
    author: 'author8',
  },
  booknumber9: {
    title: 'title9',
    language: 'language9',
    author: 'author9',
  },
};

// Question 1.5

/*
function createUl(ul) {
  for (let key in bookSpecified) {
    const titleText = bookSpecified[key].title;
    const languageText = bookSpecified[key].language;
    const authorText = bookSpecified[key].author;
    const titleElem = document.createElement('h1');
    const languageElem = document.createElement('p');
    const authorElem = document.createElement('p');
    const li = document.createElement('li');
    titleElem.innerText = titleText;
    languageElem.innerText = languageText;
    authorElem.innerText = authorText;
    li.appendChild(titleElem);
    li.appendChild(languageElem);
    li.appendChild(authorElem);
    ul.appendChild(li);
  }
}

function main() {
  const root = document.getElementById('root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  createUl(ul);
}

window.addEventListener('load', main);
*/

// Question 1.7

const images = {
  booknumber0: './img/0.jpg',
  booknumber1: './img/1.jpg',
  booknumber2: './img/2.jpg',
  booknumber3: './img/3.jpg',
  booknumber4: './img/4.jpg',
  booknumber5: './img/5.jpg',
  booknumber6: './img/6.jpg',
  booknumber7: './img/7.jpg',
  booknumber8: './img/8.jpg',
  booknumber9: './img/9.jpg',
};

// Question 1.8

function createUl(ul) {
  for (const key of Object.keys(bookSpecified)) {
    const titleText = bookSpecified[key].title;
    const languageText = bookSpecified[key].language;
    const authorText = bookSpecified[key].author;
    const titleElem = document.createElement('h1');
    const imageElem = document.createElement('img');
    imageElem.setAttribute('src', images[key]);
    imageElem.setAttribute('alt', key);
    imageElem.setAttribute('width', '100px');
    const languageElem = document.createElement('p');
    const authorElem = document.createElement('p');
    const li = document.createElement('li');
    li.setAttribute('id', key);
    titleElem.innerText = titleText;
    languageElem.innerText = languageText;
    authorElem.innerText = authorText;
    li.appendChild(titleElem);
    li.appendChild(imageElem);
    li.appendChild(languageElem);
    li.appendChild(authorElem);
    ul.appendChild(li);
  }
}

function main() {
  const root = document.getElementById('root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  createUl(ul);
}

window.addEventListener('load', main);
