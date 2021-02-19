'use strict';

const container = document.querySelector('.main');

const bookTitles = [
  'sailor_song',
  'lame_fate',
  'roadside_picnic',
  'a_mind_for_numbers',
  'other_shores',
  'the_luzhin_defense',
  'the_brothers_karamazov',
  'one_flew_over_the_cuckoos_nest',
  'sharp_objects',
  'the_idiot',
];

const bookInfo = {
  sailor_song: {
    title: 'Sailor song',
    language: 'english',
    author: 'Ken Kesey',
  },
  lame_fate: {
    title: 'Lame fate',
    language: 'russian',
    author: 'Arkady Strugatsky and Boris Strugatsky',
  },
  roadside_picnic: {
    title: 'Roadside picnic',
    language: 'russian',
    author: 'Arkady Strugatsky and Boris Strugatsky',
  },
  a_mind_for_numbers: {
    title: 'A mind for numbers',
    language: 'english',
    author: 'Barbara Oakley',
  },
  other_shores: {
    title: 'Other Shores',
    language: 'russian',
    author: 'Vladimir Nabokov',
  },
  the_luzhin_defense: {
    title: 'The Luzhin defense',
    language: 'russian',
    author: 'Vladimir Nabokov',
  },
  the_brothers_karamazov: {
    title: 'The brothers Karamazov',
    language: 'russian',
    author: 'Fyodor Dostoyevsky',
  },
  one_flew_over_the_cuckoos_nest: {
    title: "One flew over the cuckoo's nest",
    language: 'english',
    author: 'Ken Kesey',
  },
  sharp_objects: {
    title: 'Sharp objects',
    language: 'english',
    author: 'Gillian Flynn',
  },
  the_idiot: {
    title: 'The idiot',
    language: 'russian',
    author: 'Fyodor Dostoyevsky',
  },
};

const bookCovers = {
  sailor_song: './images/sailor_song.jpg',
  lame_fate: './images/lame_fate.jpg',
  roadside_picnic: './images/roadside_picnic.jpg',
  a_mind_for_numbers: './images/a_mind_for_numbers.jpg',
  other_shores: './images/other_shores.jpg',
  the_luzhin_defense: './images/the_luzhin_defense.jpg',
  the_brothers_karamazov: './images/the_brothers_karamazov.jpg',
  one_flew_over_the_cuckoos_nest: './images/one_flew_over_the_cuckoo_nest.jpg',
  sharp_objects: './images/sharp_objects.jpg',
  the_idiot: './images/the_idiot.jpg',
};

const ul = document.createElement('ul');
container.append(ul);

function makeBookList(arr, obj) {
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    ul.append(li);
    li.setAttribute('id', arr[i]);
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book_container');
    li.append(bookContainer);
    for (const key in obj) {
      if (key === arr[i]) {
        const title = document.createElement('h1');
        title.classList.add('title', `title_${key}`);
        const author = document.createElement('h2');
        author.classList.add('book_author');
        const language = document.createElement('p');
        language.classList.add('book_language');
        title.textContent = obj[key].title;
        author.textContent = obj[key].author;
        language.textContent = obj[key].language;
        bookContainer.append(title, author, language);
      }
    }
  }
}

makeBookList(bookTitles, bookInfo);

function putBookCovers(bookCoversObj) {
  for (const key in bookCoversObj) {
    if (typeof bookCoversObj === 'object') {
      const li = document.querySelector(`#${key}`);
      const h1 = document.querySelector(`.title_${key}`);
      if (key === li.getAttribute('id')) {
        const image = document.createElement('img');
        image.setAttribute('src', `${bookCoversObj[key]}`);
        image.setAttribute('alt', `book cover ${key}`);
        image.classList.add('book_image');
        h1.insertAdjacentElement('afterend', image);
      }
    }
  }
}

putBookCovers(bookCovers);
