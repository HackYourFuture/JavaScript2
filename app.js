// "use strict";

const bookNames = [
  'tanios',
  'what_is_to_be_done',
  'the_sorrows_of_young_werther',
  'red_rocks',
  'the_impatient_ones',
  'first_love',
  'lord_of_the_flies',
  'la_dame_aux_camelias',
  'oblomov',
  'cement',
];

const bookDetails = {
  tanios: {
    title: 'The Rock of Tanios',
    author: 'Amin Maalouf',
    language: 'Arabic',
  },
  what_is_to_be_done: {
    title: 'What Is To Be Done?',
    author: 'Chernyshevsky',
    language: 'Russian',
  },
  the_sorrows_of_young_werther: {
    title: 'The Sorrows of Young Werther',
    author: 'Goethe',
    language: 'German',
  },
  red_rocks: {
    title: 'Red Rocks',
    author: 'Yang Piyen - Luo Kuangpin',
    language: 'Chinese',
  },
  the_impatient_ones: {
    title: 'The Impatient Ones',
    author: 'Yuri Trifonov',
    language: 'Russian',
  },
  first_love: {
    title: 'First Love',
    author: 'Turgenyev',
    language: 'Russian',
  },
  lord_of_the_flies: {
    title: 'Lord of The Flies',
    author: 'Goethe',
    language: 'German',
  },
  la_dame_aux_camelias: {
    title: 'Madame Aux Camelias',
    author: 'Alexander Dumas',
    language: 'French',
  },
  oblomov: {
    title: 'Oblomov',
    author: 'Ivan Goncharov',
    language: 'Russian',
  },
  cement: {
    title: 'Cement',
    author: 'Fyodor Vasilievich Gladkov',
    language: 'Russian',
  },
};

const bookCovers = {
  tanios: 'img/tanios.jpg',
  what_is_to_be_done: 'img/what_is_to_be_done.jpg',
  the_sorrows_of_young_werther: 'img/the_sorrows_of_young_werther.jpg',
  red_rocks: 'img/red_rocks.jpg',
  the_impatient_ones: 'img/the_impatient_ones.jpg',
  first_love: 'img/first_love.jpg',
  lord_of_the_flies: 'img/lord_of_the_flies.jpg',
  la_dame_aux_camelias: 'img/la_dame_aux_camelias.jpg',
  oblomov: 'img/oblomov.jpg',
  cement: 'img/cement.jpg',
};

const mainDiv = document.getElementById('mainDiv');
const h1 = document.createElement('h1');
h1.textContent = 'My Favorite Books';
mainDiv.appendChild(h1);
const ulist = document.createElement('ul');
mainDiv.appendChild(ulist);

function uploadingBooks() {
  for (let details in bookDetails) {
    const bookTitles = document.createElement('li');
    ulist.appendChild(bookTitles);
    const bookAuthors = document.createElement('a');
    ulist.appendChild(bookAuthors);
    const titles = bookDetails[details].title;
    const bookLanguage = document.createElement('a');
    ulist.appendChild(bookLanguage);
    bookTitles.textContent = titles;
    const authors = bookDetails[details].author;
    bookAuthors.textContent = 'Author: ' + authors;
    const language = bookDetails[details].language;
    bookLanguage.textContent = language;
  }
}

const idTagsForBookNames = () => {
  const titleList = document.querySelectorAll('li');
  for (let i = 0; i < bookNames.length; i++) {
    titleList[i].setAttribute('id', bookNames[i]);
  }
};

const placingImagesToListItems = () => {
  for (let img in bookCovers) {
    const image = document.createElement('img');
    image.setAttribute('class', 'images');
    image.setAttribute('src', bookCovers[img]);
    image.setAttribute('alt', img);
    document.getElementById(img).appendChild(image);
  }
};

const main = () => {
  uploadingBooks();
  idTagsForBookNames();
  placingImagesToListItems();
};

window.onload = () => main();
