'use strict';

// ------------1.1-----
const bookTitles = [
  'pragmatic_programmer',
  'clean_code',
  'code_complete',
  'design_patterns',
  'refactoring',
  'mythical_man_month',
  'javascript_good_part',
  'structure_and_interpretation_of_computer',
  'c_programming_language',
  'head_first_design',
];

// --------1.2-------
// console.log(bookTitles);

// --------1.3------
function createUl(ul) {
  for (let i = 0; i < bookTitles.length; i++) {
    const listTitels = bookTitles[i];
    const listItems = document.createElement('li');
    listItems.innerText = listTitels;
    ul.appendChild(listItems);
  }
}
function main() {
  const root = document.getElementById('root');
  const ul = document.createElement('ul');
  root.appendChild(ul);
  createUl(ul);
}
window.addEventListener('load', main);

// -------1.4-------------
const bookDetails = {
  pragmatic_programmer: {
    title: 'pragmatic programmer',
    language: 'english',
    author: 'Andy Hunt',
    // pragmatic_programmer: './img/pragmatic_programmer.jpg',
  },
  clean_code: {
    title: 'clean code',
    language: 'english',
    author: 'Robert C',
  },
  code_complete: {
    title: 'code complete',
    language: 'english',
    author: 'Steve McConnel',
  },
  design_patterns: {
    title: 'Design patterns',
    language: 'english',
    author: 'Erich Gamma',
  },
  Refracting: {
    title: 'Refracting',
    language: 'english',
    author: 'Martin Fowler',
  },
  the_mythical_man: {
    title: 'The Mythical Man',
    language: 'english',
    author: 'Fredrick P',
  },
  javascript_good_part: {
    title: 'Javascript good parts',
    language: 'english',
    author: 'Douglas Crockford',
  },
  structure_and_interpretation_of_computer: {
    title: 'Structure and interpretation of computer',
    language: 'english',
    author: 'Harold Abelson',
  },
  c_programming_language: {
    title: 'C pragramming',
    language: 'english',
    author: 'Brian W',
  },
  head_first_design: {
    title: 'Head First Design',
    language: 'english',
    author: 'Eric Freeman',
  },
};
console.log(bookDetails);

// ----------1.5----------

function createUiForObject(ul) {
  for (const key in bookDetails) {
    const bookTitle = bookDetails[key].title;
    const bookLanguage = bookDetails[key].language;
    const bookAuthor = bookDetails[key].author;
    const titleItems = document.createElement('h2');
    const languageItems = document.createElement('p');
    const authorItems = document.createElement('p');
    const li = document.createElement('li');
    titleItems.innerText = bookTitle;
    languageItems.innerText = bookLanguage;
    authorItems.innerText = bookAuthor;
    li.appendChild(titleItems);
    li.appendChild(languageItems);
    li.appendChild(authorItems);
    ul.appendChild(li);
  }


function mainObject() {
  const rootObject = document.getElementById('rootObject');
  const ul = document.createElement('ul');
  rootObject.appendChild(ul);
  createUiForObject(ul);
}
window.addEventListener('load', mainObject);

// --------1.6------
// style.css

// ----------1.7--------
const images = {
  // pragmatic_programmer: './img/pragmatic_programmer.jpg',
  pragmatic_programmer: 'https://images.gr-assets.com/books/1401432508l/4099.jpg',
  // clean_code: './img/clean_code.jpg',
  clean_code: 'https://images.gr-assets.com/books/1436202607l/3735293.jpg',
  // code_complete: './img/code_complete.jpg',
  code_complete: 'https://images.gr-assets.com/books/1396837641l/4845.jpg',
  // design_patterns: './img/design_patterns.jpg',
  design_patterns: 'https://images.gr-assets.com/books/1348027904l/85009.jpg',
  refactoring: './img/refactoring.jpg',
  refactoring: 'https://images.gr-assets.com/books/1386925632l/44936.jpg',
  // mythical_man_month: './img/mythical_man_month.jpg',
  mythical_man_month: 'https://images.gr-assets.com/books/1348430512l/13629.jpg',
  // javascript_good_part: './img/javascript_good_part.jpg',
  javascript_good_part: 'https://images.gr-assets.com/books/1328834793l/2998152.jpg',
  // structure_and_interpretation_of_computer: './img/structure_and_interpretation_of_computer.jpg',
  structure_and_interpretation_of_computer:
    'https://images.gr-assets.com/books/1391032527l/43713.jpg',
  // c_programming_language: './img/c_programming_language.jpg',
  c_programming_language: 'https://images.gr-assets.com/books/1391032531l/515601.jpg',
  // head_first_design: './img/head_first_design.jpg',
  head_first_design: 'https://images.gr-assets.com/books/1408309444l/58128.jpg',
};

function createUlForObjectWithImages(ul) {
  for (const key in bookDetails) {
    const bookTitle = bookDetails[key].title;
    const titleItems = document.createElement('h2');
    titleItems.innerText = bookTitle;
    const bookLanguage = bookDetails[key].language;
    const languageItems = document.createElement('p');
    languageItems.innerText = bookLanguage;
    languageItems.className = 'languageItems';
    const bookAuthor = bookDetails[key].author;
    const authorItems = document.createElement('p');
    authorItems.innerText = bookAuthor;
    const bookImage = document.createElement('img');
    bookImage.setAttribute('src', `${images[key]}`);
    bookImage.setAttribute('alt', `${key}`);
    bookImage.setAttribute('width', '200px');
    const li = document.createElement('li');
    li.setAttribute('id', key);

    li.appendChild(titleItems);
    li.appendChild(bookImage);
    li.appendChild(languageItems);
    li.appendChild(authorItems);
    ul.appendChild(li);
  }
}

function mainObjectWithImages() {
  const rootObject = document.getElementById('rootObjectWithImages');
  const ul = document.createElement('ul');
  rootObjectWithImages.appendChild(ul);
  createUlForObjectWithImages(ul);
}
window.addEventListener('load', mainObjectWithImages);