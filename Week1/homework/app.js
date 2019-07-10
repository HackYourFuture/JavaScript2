'use strict';

/* const bookTitles = [
  'annaKarenina',
  'madameBovary',
  'warAndPeace',
  'theAdventureOfHuckleberryFinn',
  'theStoriesOfAntonChekhov',
  'middlemarch',
  'mobyDick',
  'greatExpectations',
  'crimeAndPunishment',
  'emma',
];
const newUlist = document.createElement('ul');
bookTitles.forEach(book => {
  const listItem = document.createElement('li');
  const itemText = document.createTextNode(book);
  listItem.appendChild(itemText);
  newUlist.appendChild(listItem);
});
document.body.appendChild(newUlist); */
const bookProperties = {
  annaKarenina: {
    title: 'Anna Karenina',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
  madameBovary: {
    title: 'Madame Bovary',
    language: 'French',
    author: 'Gustave Flaubert',
  },
  warAndPeace: {
    title: 'War and Peace',
    language: 'Russian',
    author: 'Leo Tolstoy',
  },
  theAdventureOfHuckleberry: {
    title: 'The Adventure of Huckle Berry',
    language: 'English',
    author: 'Mark Twain',
  },
  theStoriesOfAntonChekhov: {
    title: 'The Stories of Anton Chekhov',
    language: 'Russian',
    author: 'Anton Chekhov',
  },
  middlemarch: {
    title: 'Middle March',
    language: 'English',
    author: 'George Eliot',
  },
  mobyDick: {
    title: 'Moby Dick',
    language: 'English',
    author: 'Herman Melville',
  },
  greatExpectations: {
    title: 'Great Expectations',
    language: 'English',
    author: 'Charles Dickens',
  },
  crimeAndPunishment: {
    title: 'Crime and Punishment',
    language: 'Russian',
    author: 'Fyodor Dostoevsky',
  },
  emma: {
    title: 'Emma',
    language: 'English',
    author: 'Jane Austen',
  },
};
const bookCovers = {
  annaKarenina: './img/annaKarenina.jpg',
  madameBovary: './img/madameBovary.jpg',
  warAndPeace: './img/warAndPeace.jpg',
  theAdventureOfHuckleberryFinn: './img/theAdventureOfHuckleberryFinn.jpg',
  theStoriesOfAntonChekhov: './img/theStoriesOfAntonChekhov.jpg',
  middlemarch: './img/middlemarch.jpg',
  mobyDick: './img/mobyDick.jpg',
  greatExpectations: './img/greatExpectations.jpg',
  crimeAndPunishment: './img/crimeAndPunishment.jpg',
  emma: './img/emma.jpg',
};
const bookInfo = Object.entries(bookProperties);
const bookCoverKeys = Object.keys(bookCovers);
const bookCoverValues = Object.values(bookCovers);
function main() {
  const ul = document.createElement('ul');
  const body = document.body;
  for (let i = 0; i < bookInfo.length; i++) {
    const li = document.createElement('li');
    li.id = bookCoverKeys[i];
    ul.appendChild(li);
    const title = document.createElement('h1');
    title.textContent = 'Title: ' + bookInfo[i][1].title;
    li.appendChild(title);
    const language = document.createElement('p');
    language.textContent = 'Language: ' + bookInfo[i][1].language;
    li.appendChild(language);
    const author = document.createElement('p');
    author.textContent = 'Author: ' + bookInfo[i][1].author;
    li.appendChild(author);
    const images = document.createElement('img');
    images.setAttribute('src', bookCoverValues[i]);
    li.appendChild(images);
  }
  body.appendChild(ul);
}
window.onload = () => main();
